import * as tf from '@tensorflow/tfjs-core';
import { disposeUnusedWeightTensors, ParamMapping } from 'tfjs-image-recognition-base';

import { loadParamsFactory } from './loadParamsFactory';
import { NetParams } from './types';

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractDenseBlock4Params
  } = loadParamsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlock4Params('dense0', true),
    dense1: extractDenseBlock4Params('dense1'),
    dense2: extractDenseBlock4Params('dense2'),
    dense3: extractDenseBlock4Params('dense3')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}