import * as tf from '@tensorflow/tfjs-core';

import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { ConvParams, ParamMapping } from '../commons/types';
import { FCParams, NetParams } from './types';

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  function extractConvParams(
    channelsIn: number,
    channelsOut: number,
    filterSize: number,
    mappedPrefix: string
  ): ConvParams {

    const filters = tf.tensor4d(
      extractWeights(channelsIn * channelsOut * filterSize * filterSize),
      [filterSize, filterSize, channelsIn, channelsOut]
    )
    const bias = tf.tensor1d(extractWeights(channelsOut))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/filters` },
      { paramPath: `${mappedPrefix}/bias` }
    )

    return { filters, bias }
  }

  function extractFcParams(channelsIn: number, channelsOut: number, mappedPrefix: string): FCParams {

    const fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut])
    const fc_bias = tf.tensor1d(extractWeights(channelsOut))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/weights` },
      { paramPath: `${mappedPrefix}/bias` }
    )

    return {
      weights: fc_weights,
      bias: fc_bias
    }
  }

  const conv0 = extractConvParams(3, 32, 3, 'conv0')
  const conv1 = extractConvParams(32, 64, 3, 'conv1')
  const conv2 = extractConvParams(64, 64, 3, 'conv2')
  const conv3 = extractConvParams(64, 64, 3, 'conv3')
  const conv4 = extractConvParams(64, 64, 3, 'conv4')
  const conv5 = extractConvParams(64, 128, 3, 'conv5')
  const conv6 = extractConvParams(128, 128, 3, 'conv6')
  const conv7 = extractConvParams(128, 256, 3, 'conv7')
  const fc0 = extractFcParams(6400, 1024, 'fc0')
  const fc1 = extractFcParams(1024, 136, 'fc1')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: {
      conv0,
      conv1,
      conv2,
      conv3,
      conv4,
      conv5,
      conv6,
      conv7,
      fc0,
      fc1
    }
  }
}