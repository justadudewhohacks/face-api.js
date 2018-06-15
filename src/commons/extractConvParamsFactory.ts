import * as tf from '@tensorflow/tfjs-core';

import { ConvParams, ExtractWeightsFunction } from './types';

export function extractConvParamsFactory(extractWeights: ExtractWeightsFunction) {
  return function (
    channelsIn: number,
    channelsOut: number,
    filterSize: number
  ): ConvParams {
    const filters = tf.tensor4d(
      extractWeights(channelsIn * channelsOut * filterSize * filterSize),
      [filterSize, filterSize, channelsIn, channelsOut]
    )
    const bias = tf.tensor1d(extractWeights(channelsOut))

    return {
      filters,
      bias
    }
  }
}