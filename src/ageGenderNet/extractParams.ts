import { extractFCParamsFactory, extractWeightsFactory, ParamMapping } from '../common';
import { NetParams } from './types';

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractFCParams = extractFCParamsFactory(extractWeights, paramMappings)

  const age = extractFCParams(512, 1, 'fc/age')
  const gender = extractFCParams(512, 2, 'fc/gender')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { fc: { age, gender } }
  }
}