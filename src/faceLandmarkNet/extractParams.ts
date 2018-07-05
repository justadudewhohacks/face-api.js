import * as tf from '@tensorflow/tfjs-core';

import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { ParamMapping } from '../commons/types';
import { FCParams, NetParams } from './types';

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {
  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)

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

  const conv0_params = extractConvParams(3, 32, 3, 'conv0_params')
  const conv1_params = extractConvParams(32, 64, 3, 'conv1_params')
  const conv2_params = extractConvParams(64, 64, 3, 'conv2_params')
  const conv3_params = extractConvParams(64, 64, 3, 'conv3_params')
  const conv4_params = extractConvParams(64, 64, 3, 'conv4_params')
  const conv5_params = extractConvParams(64, 128, 3, 'conv5_params')
  const conv6_params = extractConvParams(128, 128, 3, 'conv6_params')
  const conv7_params = extractConvParams(128, 256, 3, 'conv7_params')
  const fc0_params = extractFcParams(6400, 1024, 'fc0_params')
  const fc1_params = extractFcParams(1024, 136, 'fc1_params')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: {
      conv0_params,
      conv1_params,
      conv2_params,
      conv3_params,
      conv4_params,
      conv5_params,
      conv6_params,
      conv7_params,
      fc0_params,
      fc1_params
    }
  }
}