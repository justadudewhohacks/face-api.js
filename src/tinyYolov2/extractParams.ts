import * as tf from '@tensorflow/tfjs-core';

import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { ExtractWeightsFunction, ParamMapping } from '../commons/types';
import { BatchNorm, ConvWithBatchNorm, NetParams } from './types';

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

  return {
    extractConvParams,
    extractConvWithBatchNormParams
  }

}

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractConvWithBatchNormParams
  } = extractorsFactory(extractWeights, paramMappings)

  const conv0 = extractConvWithBatchNormParams(3, 16, 'conv0')
  const conv1 = extractConvWithBatchNormParams(16, 32, 'conv1')
  const conv2 = extractConvWithBatchNormParams(32, 64, 'conv2')
  const conv3 = extractConvWithBatchNormParams(64, 128, 'conv3')
  const conv4 = extractConvWithBatchNormParams(128, 256, 'conv4')
  const conv5 = extractConvWithBatchNormParams(256, 512, 'conv5')
  const conv6 = extractConvWithBatchNormParams(512, 1024, 'conv6')
  const conv7 = extractConvWithBatchNormParams(1024, 1024, 'conv7')
  const conv8 = extractConvParams(1024, 30, 1, 'conv8')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  const params = { conv0, conv1, conv2, conv3, conv4, conv5, conv6, conv7, conv8 }

  return { params, paramMappings }
}