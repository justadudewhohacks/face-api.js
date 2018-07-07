import * as tf from '@tensorflow/tfjs-core';

import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractFCParamsFactory } from '../commons/extractFCParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
import { ExtractWeightsFunction, ParamMapping } from '../commons/types';
import { NetParams, PNetParams, RNetParams, SharedParams, ONetParams } from './types';

function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

  const extractConvParams = extractConvParamsFactory(extractWeights, paramMappings)
  const extractFCParams = extractFCParamsFactory(extractWeights, paramMappings)

  function extractPReluParams(size: number, paramPath: string): tf.Tensor1D {
    const alpha = tf.tensor1d(extractWeights(size))
    paramMappings.push({ paramPath })
    return alpha
  }

  function extractSharedParams(numFilters: number[], mappedPrefix: string, isRnet: boolean = false): SharedParams {

    const conv1 = extractConvParams(numFilters[0], numFilters[1], 3, `${mappedPrefix}/conv1`)
    const prelu1_alpha = extractPReluParams(numFilters[1], `${mappedPrefix}/prelu1_alpha`)
    const conv2 = extractConvParams(numFilters[1], numFilters[2], 3, `${mappedPrefix}/conv2`)
    const prelu2_alpha = extractPReluParams(numFilters[2], `${mappedPrefix}/prelu2_alpha`)
    const conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, `${mappedPrefix}/conv3`)
    const prelu3_alpha = extractPReluParams(numFilters[3], `${mappedPrefix}/prelu3_alpha`)

    return { conv1, prelu1_alpha, conv2, prelu2_alpha, conv3, prelu3_alpha }
  }

  function extractPNetParams(): PNetParams {

    const sharedParams = extractSharedParams([3, 10, 16, 32], 'pnet')
    const conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1')
    const conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2')

    return { ...sharedParams, conv4_1, conv4_2 }
  }

  function extractRNetParams(): RNetParams {

    const sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true)
    const fc1 = extractFCParams(576, 128, 'rnet/fc1')
    const prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha')
    const fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1')
    const fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2')

    return { ...sharedParams, fc1, prelu4_alpha, fc2_1, fc2_2 }
  }

  function extractONetParams(): ONetParams {

    const sharedParams = extractSharedParams([3, 32, 64, 64], 'onet')
    const conv4 = extractConvParams(64, 128, 2, 'onet/conv4')
    const prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha')
    const fc1 = extractFCParams(1152, 256, 'onet/fc1')
    const prelu5_alpha = extractPReluParams(256, 'onet/prelu4_alpha')
    const fc2_1 = extractFCParams(256, 2, 'onet/fc2_1')
    const fc2_2 = extractFCParams(256, 4, 'onet/fc2_2')
    const fc2_3 = extractFCParams(256, 10, 'onet/fc2_2')

    return { ...sharedParams, conv4, prelu4_alpha, fc1, prelu5_alpha, fc2_1, fc2_2, fc2_3 }
  }

  return {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  }

}

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const paramMappings: ParamMapping[] = []

  const {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  } = extractorsFactory(extractWeights, paramMappings)

  const pnet = extractPNetParams()
  const rnet = extractRNetParams()
  const onet = extractONetParams()

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return { params: { pnet, rnet, onet }, paramMappings }
}