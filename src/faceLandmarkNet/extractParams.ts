import * as tf from '@tensorflow/tfjs-core';
import { extractWeightsFactory, ParamMapping } from 'tfjs-image-recognition-base';
import { FCParams } from 'tfjs-tiny-yolov2';

import { NetParams } from './types';

export function extractParams(weights: Float32Array, numFilters: number): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  function extractFCParams(channelsIn: number, channelsOut: number, mappedPrefix: string): FCParams {
    const weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut])
    const bias = tf.tensor1d(extractWeights(channelsOut))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/weights` },
      { paramPath: `${mappedPrefix}/bias` }
    )

    return {
      weights,
      bias
    }
  }

  const fc = extractFCParams(numFilters, 136, 'fc')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { fc }
  }
}