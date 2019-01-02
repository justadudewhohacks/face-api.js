import { extractWeightsFactory, ParamMapping } from 'tfjs-image-recognition-base';
import { extractFCParamsFactory } from 'tfjs-tiny-yolov2';

import { NetParams } from './types';

export function extractParams(weights: Float32Array, channelsIn: number, channelsOut: number): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractFCParams = extractFCParamsFactory(extractWeights, paramMappings)

  const fc = extractFCParams(channelsIn, channelsOut, 'fc')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { fc }
  }
}