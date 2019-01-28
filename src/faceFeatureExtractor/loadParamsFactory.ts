import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { DenseBlock3Params, DenseBlock4Params } from './types';

export function loadParamsFactory(weightMap: any, paramMappings: TfjsImageRecognitionBase.ParamMapping[]) {

  const extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings)

  function extractConvParams(prefix: string): TfjsImageRecognitionBase.ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/filters`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { filters, bias }
  }

  function extractSeparableConvParams(prefix: string): TfjsImageRecognitionBase.SeparableConvParams {
    const depthwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/depthwise_filter`, 4)
    const pointwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/pointwise_filter`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return new TfjsImageRecognitionBase.SeparableConvParams(
      depthwise_filter,
      pointwise_filter,
      bias
    )
  }

  function extractDenseBlock3Params(prefix: string, isFirstLayer: boolean = false): DenseBlock3Params {
    const conv0 = isFirstLayer
      ? extractConvParams(`${prefix}/conv0`)
      : extractSeparableConvParams(`${prefix}/conv0`)
    const conv1 = extractSeparableConvParams(`${prefix}/conv1`)
    const conv2 = extractSeparableConvParams(`${prefix}/conv2`)

    return { conv0, conv1, conv2 }
  }

  function extractDenseBlock4Params(prefix: string, isFirstLayer: boolean = false): DenseBlock4Params {
    const conv0 = isFirstLayer
      ? extractConvParams(`${prefix}/conv0`)
      : extractSeparableConvParams(`${prefix}/conv0`)
    const conv1 = extractSeparableConvParams(`${prefix}/conv1`)
    const conv2 = extractSeparableConvParams(`${prefix}/conv2`)
    const conv3 = extractSeparableConvParams(`${prefix}/conv3`)

    return { conv0, conv1, conv2, conv3 }
  }

  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params
  }
}