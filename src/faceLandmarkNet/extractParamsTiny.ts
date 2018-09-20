import * as tf from '@tensorflow/tfjs-core';
import { extractWeightsFactory, ExtractWeightsFunction, ParamMapping } from 'tfjs-image-recognition-base';
import { extractConvParamsFactory, FCParams } from 'tfjs-tiny-yolov2';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';

import { DenseBlockParams, TinyNetParams } from './types';

function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

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

  return {
    extractSeparableConvParams,
    extractFCParams
  }

}

export function extractParamsTiny(weights: Float32Array): { params: TinyNetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const {
    extractSeparableConvParams,
    extractFCParams
  } = extractorsFactory(extractWeights, paramMappings)

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)

  function extractDenseBlockParams(channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer: boolean = false): DenseBlockParams {

    const conv0 = isFirstLayer
      ? extractConvParams(channelsIn, channelsOut, 3, `${mappedPrefix}/conv0`)
      : extractSeparableConvParams(channelsIn, channelsOut, `${mappedPrefix}/conv0`)
    const conv1 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv1`)
    const conv2 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv2`)

    return { conv0, conv1, conv2 }
  }

  const dense0 = extractDenseBlockParams(3, 32, 'dense0', true)
  const dense1 = extractDenseBlockParams(32, 64, 'dense1')
  const dense2 = extractDenseBlockParams(64, 128, 'dense2')
  const fc = extractFCParams(128, 136, 'fc')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { dense0, dense1, dense2, fc }
  }
}