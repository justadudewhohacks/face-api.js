import { extractWeightsFactory, ParamMapping } from 'tfjs-image-recognition-base';
import { extractConvParamsFactory, extractFCParamsFactory } from 'tfjs-tiny-yolov2';

import { NetParams } from './types';

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)
  const extractFCParams = extractFCParamsFactory(extractWeights, paramMappings)

  const conv0 = extractConvParams(3, 32, 3, 'conv0')
  const conv1 = extractConvParams(32, 64, 3, 'conv1')
  const conv2 = extractConvParams(64, 64, 3, 'conv2')
  const conv3 = extractConvParams(64, 64, 3, 'conv3')
  const conv4 = extractConvParams(64, 64, 3, 'conv4')
  const conv5 = extractConvParams(64, 128, 3, 'conv5')
  const conv6 = extractConvParams(128, 128, 3, 'conv6')
  const conv7 = extractConvParams(128, 256, 3, 'conv7')
  const fc0 = extractFCParams(6400, 1024, 'fc0')
  const fc1 = extractFCParams(1024, 136, 'fc1')

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    paramMappings,
    params: {
      conv0,
      conv1,
      conv2,
      conv3,
      conv4,
      conv5,
      conv6,
      conv7,
      fc0,
      fc1
    }
  }
}