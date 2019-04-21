import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { TinyXceptionParams } from './types';

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: TinyXceptionParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {

  throw "extractParamsFromWeigthMap not implemented";


  const paramMappings: TfjsImageRecognitionBase.ParamMapping[] = []

  TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params: {} as any, paramMappings }
}