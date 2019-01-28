import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { loadParamsFactory } from './loadParamsFactory';
import { TinyFaceFeatureExtractorParams } from './types';

export function extractParamsFromWeigthMapTiny(
  weightMap: tf.NamedTensorMap
): { params: TinyFaceFeatureExtractorParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {

  const paramMappings: TfjsImageRecognitionBase.ParamMapping[] = []

  const {
    extractDenseBlock3Params
  } = loadParamsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlock3Params('dense0', true),
    dense1: extractDenseBlock3Params('dense1'),
    dense2: extractDenseBlock3Params('dense2')
  }

  TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}