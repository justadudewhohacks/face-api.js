import * as tf from '@tensorflow/tfjs-core';
import { ExtractWeightsFunction, ParamMapping } from 'tfjs-image-recognition-base';
import { extractConvParamsFactory, FCParams, SeparableConvParams } from 'tfjs-tiny-yolov2';

import { DenseBlock3Params, DenseBlock4Params } from './types';

export function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

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

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)

  function extractDenseBlock3Params(channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer: boolean = false): DenseBlock3Params {

    const conv0 = isFirstLayer
      ? extractConvParams(channelsIn, channelsOut, 3, `${mappedPrefix}/conv0`)
      : extractSeparableConvParams(channelsIn, channelsOut, `${mappedPrefix}/conv0`)
    const conv1 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv1`)
    const conv2 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv2`)

    return { conv0, conv1, conv2 }
  }

  function extractDenseBlock4Params(channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer: boolean = false): DenseBlock4Params {

    const { conv0, conv1, conv2 } = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer)
    const conv3 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv3`)

    return { conv0, conv1, conv2, conv3 }
  }

  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params
  }

}