import { disposeUnusedWeightTensors, loadWeightMap, ParamMapping } from 'tfjs-image-recognition-base';

import { loadParamsFactory } from './loadParamsFactory';
import { NetParams } from './types';

const DEFAULT_MODEL_NAME = 'face_landmark_68_model'

export async function loadQuantizedParams(
  uri: string | undefined
): Promise<{ params: NetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractDenseBlock4Params,
    extractFcParams
  } = loadParamsFactory(weightMap, paramMappings)

  const params = {
    dense0: extractDenseBlock4Params('dense0', true),
    dense1: extractDenseBlock4Params('dense1'),
    dense2: extractDenseBlock4Params('dense2'),
    dense3: extractDenseBlock4Params('dense3'),
    fc: extractFcParams('fc')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}