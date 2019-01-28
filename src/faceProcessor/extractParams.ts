import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { NetParams } from './types';

export function extractParams(weights: Float32Array, channelsIn: number, channelsOut: number): { params: NetParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {

  const paramMappings: TfjsImageRecognitionBase.ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = TfjsImageRecognitionBase.extractWeightsFactory(weights)

  const extractFCParams = TfjsImageRecognitionBase.extractFCParamsFactory(extractWeights, paramMappings)

  const fc = extractFCParams(channelsIn, channelsOut, 'fc')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: { fc }
  }
}