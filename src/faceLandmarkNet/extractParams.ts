import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { FaceLandmarkNet } from './types';
import * as tf from '@tensorflow/tfjs-core';

export function extractParams(weights: Float32Array): FaceLandmarkNet.NetParams {
  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractConvParams = extractConvParamsFactory(extractWeights)

  function extractFcParams(channelsIn: number, channelsOut: number,): FaceLandmarkNet.FCParams {
    const fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut])
    const fc_bias = tf.tensor1d(extractWeights(channelsOut))
    return {
      weights: fc_weights,
      bias: fc_bias
    }
  }

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    conv0_params: extractConvParams(3, 32, 3),
    conv1_params: extractConvParams(32, 64, 3),
    conv2_params: extractConvParams(64, 64, 3),
    conv3_params: extractConvParams(64, 64, 3),
    conv4_params: extractConvParams(64, 64, 3),
    conv5_params: extractConvParams(64, 128, 3),
    conv6_params: extractConvParams(128, 128, 3),
    conv7_params: extractConvParams(128, 256, 3),
    fc0_params: extractFcParams(6400, 1024),
    fc1_params:extractFcParams(1024, 136)
  }
}