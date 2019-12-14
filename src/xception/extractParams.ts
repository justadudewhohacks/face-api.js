import { extractConvParamsFactory, extractSeparableConvParamsFactory, extractWeightsFactory } from '../common';
import { ExtractWeightsFunction, ParamMapping } from '../common/types';
import { range } from '../utils';
import { MainBlockParams, ReductionBlockParams, TinyXceptionParams } from './types';

function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)
  const extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings)

  function extractReductionBlockParams(channelsIn: number, channelsOut: number, mappedPrefix: string): ReductionBlockParams {

    const separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, `${mappedPrefix}/separable_conv0`)
    const separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/separable_conv1`)
    const expansion_conv = extractConvParams(channelsIn, channelsOut, 1, `${mappedPrefix}/expansion_conv`)

    return { separable_conv0, separable_conv1, expansion_conv }
  }

  function extractMainBlockParams(channels: number, mappedPrefix: string): MainBlockParams {

    const separable_conv0 = extractSeparableConvParams(channels, channels, `${mappedPrefix}/separable_conv0`)
    const separable_conv1 = extractSeparableConvParams(channels, channels, `${mappedPrefix}/separable_conv1`)
    const separable_conv2 = extractSeparableConvParams(channels, channels, `${mappedPrefix}/separable_conv2`)

    return { separable_conv0, separable_conv1, separable_conv2 }
  }

  return {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  }

}

export function extractParams(weights: Float32Array, numMainBlocks: number): { params: TinyXceptionParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  } = extractorsFactory(extractWeights, paramMappings)

  const entry_flow_conv_in = extractConvParams(3, 32, 3, 'entry_flow/conv_in')
  const entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, 'entry_flow/reduction_block_0')
  const entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, 'entry_flow/reduction_block_1')

  const entry_flow = {
    conv_in: entry_flow_conv_in,
    reduction_block_0: entry_flow_reduction_block_0,
    reduction_block_1: entry_flow_reduction_block_1
  }

  const middle_flow = {}
  range(numMainBlocks, 0, 1).forEach((idx) => {
    middle_flow[`main_block_${idx}`] = extractMainBlockParams(128, `middle_flow/main_block_${idx}`)
  })

  const exit_flow_reduction_block = extractReductionBlockParams(128, 256, 'exit_flow/reduction_block')
  const exit_flow_separable_conv = extractSeparableConvParams(256, 512, 'exit_flow/separable_conv')

  const exit_flow = {
    reduction_block: exit_flow_reduction_block,
    separable_conv: exit_flow_separable_conv
  }

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { entry_flow, middle_flow, exit_flow }
  }
}