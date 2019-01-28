import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { loadParamsFactory } from './loadParamsFactory';
import { FaceFeatureExtractorParams } from './types';

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: FaceFeatureExtractorParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {

  const paramMappings: TfjsImageRecognitionBase.ParamMapping[] = []

  const {
    extractDenseBlock4Params
  } = loadParamsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlock4Params('dense0', true),
    dense1: extractDenseBlock4Params('dense1'),
    dense2: extractDenseBlock4Params('dense2'),
    dense3: extractDenseBlock4Params('dense3')
  }

  TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}