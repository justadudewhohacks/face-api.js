import { extractWeightsFactory, ParamMapping } from 'tfjs-image-recognition-base';

import { extractorsFactory } from './extractorsFactory';
import { TinyNetParams } from './types';

export function extractParamsTiny(weights: Float32Array): { params: TinyNetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const {
    extractDenseBlock3Params,
    extractFCParams
  } = extractorsFactory(extractWeights, paramMappings)

  const dense0 = extractDenseBlock3Params(3, 32, 'dense0', true)
  const dense1 = extractDenseBlock3Params(32, 64, 'dense1')
  const dense2 = extractDenseBlock3Params(64, 128, 'dense2')
  const fc = extractFCParams(128, 136, 'fc')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { dense0, dense1, dense2, fc }
  }
}