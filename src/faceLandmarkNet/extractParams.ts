import * as tf from '@tensorflow/tfjs-core';

import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { FCParams, NetParams } from './types';

export function extractParams(weights: Float32Array): NetParams {
  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractConvParams = extractConvParamsFactory(extractWeights)

  function extractFcParams(channelsIn: number, channelsOut: number,): FCParams {
    const fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut])
    const fc_bias = tf.tensor1d(extractWeights(channelsOut))
    return {
      weights: fc_weights,
      bias: fc_bias
    }
  }

  const conv0_params = extractConvParams(3, 32, 3)
  const conv1_params = extractConvParams(32, 64, 3)
  const conv2_params = extractConvParams(64, 64, 3)
  const conv3_params = extractConvParams(64, 64, 3)
  const conv4_params = extractConvParams(64, 64, 3)
  const conv5_params = extractConvParams(64, 128, 3)
  const conv6_params = extractConvParams(128, 128, 3)
  const conv7_params = extractConvParams(128, 256, 3)
  const fc0_params = extractFcParams(6400, 1024)
  const fc1_params = extractFcParams(1024, 136)

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
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