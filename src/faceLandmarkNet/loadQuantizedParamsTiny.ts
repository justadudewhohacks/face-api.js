import * as tf from '@tensorflow/tfjs-core';
import {
  disposeUnusedWeightTensors,
  extractWeightEntryFactory,
  loadWeightMap,
  ParamMapping,
} from 'tfjs-image-recognition-base';
import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';

import { DenseBlockParams, TinyNetParams } from './types';

const DEFAULT_MODEL_NAME = 'face_landmark_68_tiny_model'

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

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

  function extractDenseBlockParams(prefix: string, isFirstLayer: boolean = false): DenseBlockParams {
    const conv0 = isFirstLayer
      ? extractConvParams(`${prefix}/conv0`)
      : extractSeparableConvParams(`${prefix}/conv0`)
    const conv1 = extractSeparableConvParams(`${prefix}/conv1`)
    const conv2 = extractSeparableConvParams(`${prefix}/conv2`)

    return { conv0, conv1, conv2 }
  }

  function extractFcParams(prefix: string): FCParams {
    const weights = extractWeightEntry<tf.Tensor2D>(`${prefix}/weights`, 2)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { weights, bias }
  }

  return {
    extractDenseBlockParams,
    extractFcParams
  }
}

export async function loadQuantizedParamsTiny(
  uri: string | undefined
): Promise<{ params: TinyNetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractDenseBlockParams,
    extractFcParams
  } = extractorsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlockParams('dense0', true),
    dense1: extractDenseBlockParams('dense1'),
    dense2: extractDenseBlockParams('dense2'),
    fc: extractFcParams('fc')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}