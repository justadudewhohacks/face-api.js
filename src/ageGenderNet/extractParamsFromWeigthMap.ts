import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { NetParams } from './types';

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: NetParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {

  const paramMappings: TfjsImageRecognitionBase.ParamMapping[] = []

  const extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings)

  function extractFcParams(prefix: string): TfjsImageRecognitionBase.FCParams {
    const weights = extractWeightEntry<tf.Tensor2D>(`${prefix}/weights`, 2)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)
    return { weights, bias }
  }

  const params = {
    fc: {
      age: extractFcParams('fc_age'),
      gender: extractFcParams('fc_gender')
    }
  }

  TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}