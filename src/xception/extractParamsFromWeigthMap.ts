import * as tf from '@tensorflow/tfjs-core';

import {
  disposeUnusedWeightTensors,
  extractWeightEntryFactory,
  loadSeparableConvParamsFactory,
  ParamMapping,
} from '../common';
import { loadConvParamsFactory } from '../common/loadConvParamsFactory';
import { range } from '../utils';
import { MainBlockParams, ReductionBlockParams, TinyXceptionParams } from './types';

function loadParamsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  const extractConvParams = loadConvParamsFactory(extractWeightEntry)
  const extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry)

  function extractReductionBlockParams(mappedPrefix: string): ReductionBlockParams {

    const separable_conv0 = extractSeparableConvParams(`${mappedPrefix}/separable_conv0`)
    const separable_conv1 = extractSeparableConvParams(`${mappedPrefix}/separable_conv1`)
    const expansion_conv = extractConvParams(`${mappedPrefix}/expansion_conv`)

    return { separable_conv0, separable_conv1, expansion_conv }
  }

  function extractMainBlockParams(mappedPrefix: string): MainBlockParams {

    const separable_conv0 = extractSeparableConvParams(`${mappedPrefix}/separable_conv0`)
    const separable_conv1 = extractSeparableConvParams(`${mappedPrefix}/separable_conv1`)
    const separable_conv2 = extractSeparableConvParams(`${mappedPrefix}/separable_conv2`)

    return { separable_conv0, separable_conv1, separable_conv2 }
  }

  return {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  }
}

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap,
  numMainBlocks: number
): { params: TinyXceptionParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractSeparableConvParams,
    extractReductionBlockParams,
    extractMainBlockParams
  } = loadParamsFactory(weightMap, paramMappings)

  const entry_flow_conv_in = extractConvParams('entry_flow/conv_in')
  const entry_flow_reduction_block_0 = extractReductionBlockParams('entry_flow/reduction_block_0')
  const entry_flow_reduction_block_1 = extractReductionBlockParams('entry_flow/reduction_block_1')

  const entry_flow = {
    conv_in: entry_flow_conv_in,
    reduction_block_0: entry_flow_reduction_block_0,
    reduction_block_1: entry_flow_reduction_block_1
  }

  const middle_flow = {}
  range(numMainBlocks, 0, 1).forEach((idx) => {
    middle_flow[`main_block_${idx}`] = extractMainBlockParams(`middle_flow/main_block_${idx}`)
  })

  const exit_flow_reduction_block = extractReductionBlockParams('exit_flow/reduction_block')
  const exit_flow_separable_conv = extractSeparableConvParams('exit_flow/separable_conv')

  const exit_flow = {
    reduction_block: exit_flow_reduction_block,
    separable_conv: exit_flow_separable_conv
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params: { entry_flow, middle_flow, exit_flow }, paramMappings }
}