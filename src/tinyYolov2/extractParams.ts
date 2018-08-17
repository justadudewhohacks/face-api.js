import * as tf from '@tensorflow/tfjs-core';

import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { ExtractWeightsFunction, ParamMapping } from '../commons/types';
import { BatchNorm, ConvWithBatchNorm, NetParams, SeparableConvParams } from './types';

function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)

  function extractBatchNormParams(size: number, mappedPrefix: string): BatchNorm {

    const sub = tf.tensor1d(extractWeights(size))
    const truediv = tf.tensor1d(extractWeights(size))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/sub` },
      { paramPath: `${mappedPrefix}/truediv` }
    )

    return { sub, truediv }
  }

  function extractConvWithBatchNormParams(channelsIn: number, channelsOut: number, mappedPrefix: string): ConvWithBatchNorm {

    const conv = extractConvParams(channelsIn, channelsOut, 3, `${mappedPrefix}/conv`)
    const bn = extractBatchNormParams(channelsOut, `${mappedPrefix}/bn`)

    return { conv, bn }
  }

  function extractSeparableConvParams(channelsIn: number, channelsOut: number, mappedPrefix: string): SeparableConvParams {
    const depthwise_filter = tf.tensor4d(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1])
    const pointwise_filter = tf.tensor4d(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut])
    const bias = tf.tensor1d(extractWeights(channelsOut))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/depthwise_filter` },
      { paramPath: `${mappedPrefix}/pointwise_filter` },
      { paramPath: `${mappedPrefix}/bias` }
    )

    return new SeparableConvParams(
      depthwise_filter,
      pointwise_filter,
      bias
    )
  }

  return {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  }

}

export function extractParams(weights: Float32Array, withSeparableConvs: boolean): { params: NetParams, paramMappings: ParamMapping[] } {

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  } = extractorsFactory(extractWeights, paramMappings)

  const extractConvFn = withSeparableConvs ? extractSeparableConvParams : extractConvWithBatchNormParams
  const numAnchorEncodings = withSeparableConvs ? 5 : 6

  const conv0 = extractConvFn(3, 16, 'conv0',)
  const conv1 = extractConvFn(16, 32, 'conv1')
  const conv2 = extractConvFn(32, 64, 'conv2')
  const conv3 = extractConvFn(64, 128, 'conv3')
  const conv4 = extractConvFn(128, 256, 'conv4')
  const conv5 = extractConvFn(256, 512, 'conv5')
  const conv6 = extractConvFn(512, 1024, 'conv6')
  const conv7 = extractConvFn(1024, 1024, 'conv7')
  const conv8 = extractConvParams(1024, 5 * numAnchorEncodings, 1, 'conv8')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  const params = { conv0, conv1, conv2, conv3, conv4, conv5, conv6, conv7, conv8 }

  return { params, paramMappings }
}