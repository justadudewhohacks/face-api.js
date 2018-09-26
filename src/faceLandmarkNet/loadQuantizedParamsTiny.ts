import { disposeUnusedWeightTensors, loadWeightMap, ParamMapping } from 'tfjs-image-recognition-base';

import { loadParamsFactory } from './loadParamsFactory';
import { TinyNetParams } from './types';

const DEFAULT_MODEL_NAME = 'face_landmark_68_tiny_model'

export async function loadQuantizedParamsTiny(
  uri: string | undefined
): Promise<{ params: TinyNetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractDenseBlock3Params,
    extractFcParams
  } = loadParamsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlock3Params('dense0', true),
    dense1: extractDenseBlock3Params('dense1'),
    dense2: extractDenseBlock3Params('dense2'),
    fc: extractFcParams('fc')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}