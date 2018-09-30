import * as tf from '@tensorflow/tfjs-core';
import { extractWeightEntryFactory, ParamMapping } from 'tfjs-image-recognition-base';
import { ConvParams, FCParams, SeparableConvParams } from 'tfjs-tiny-yolov2';

import { DenseBlock3Params, DenseBlock4Params } from './types';

export function loadParamsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  function extractConvParams(prefix: string): ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/filters`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { filters, bias }
  }

  function extractSeparableConvParams(prefix: string): SeparableConvParams {
    const depthwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/depthwise_filter`, 4)
    const pointwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/pointwise_filter`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return new SeparableConvParams(
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

  function extractFcParams(prefix: string): FCParams {
    const weights = extractWeightEntry<tf.Tensor2D>(`${prefix}/weights`, 2)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { weights, bias }
  }

  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params,
    extractFcParams
  }
}