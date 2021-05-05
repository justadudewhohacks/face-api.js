import * as tf from '@tensorflow/tfjs-core';

import { ConvParams, disposeUnusedWeightTensors, extractWeightEntryFactory, FCParams, ParamMapping } from '../common';
import { NetParams, ONetParams, PNetParams, RNetParams, SharedParams } from './types';

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  function extractConvParams(prefix: string): ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/weights`, 4, `${prefix}/filters`)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { filters, bias }
  }

  function extractFCParams(prefix: string): FCParams {
    const weights = extractWeightEntry<tf.Tensor2D>(`${prefix}/weights`, 2)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return { weights, bias }
  }

  function extractPReluParams(paramPath: string): tf.Tensor1D {
    return extractWeightEntry<tf.Tensor1D>(paramPath, 1)
  }

  function extractSharedParams(prefix: string): SharedParams {

    const conv1 = extractConvParams(`${prefix}/conv1`)
    const prelu1_alpha = extractPReluParams(`${prefix}/prelu1_alpha`)
    const conv2 = extractConvParams(`${prefix}/conv2`)
    const prelu2_alpha = extractPReluParams(`${prefix}/prelu2_alpha`)
    const conv3 = extractConvParams(`${prefix}/conv3`)
    const prelu3_alpha = extractPReluParams(`${prefix}/prelu3_alpha`)

    return { conv1, prelu1_alpha, conv2, prelu2_alpha, conv3, prelu3_alpha }
  }

  function extractPNetParams(): PNetParams {

    const sharedParams = extractSharedParams('pnet')
    const conv4_1 = extractConvParams('pnet/conv4_1')
    const conv4_2 = extractConvParams('pnet/conv4_2')

    return { ...sharedParams, conv4_1, conv4_2 }
  }

  function extractRNetParams(): RNetParams {

    const sharedParams = extractSharedParams('rnet')
    const fc1 = extractFCParams('rnet/fc1')
    const prelu4_alpha = extractPReluParams('rnet/prelu4_alpha')
    const fc2_1 = extractFCParams('rnet/fc2_1')
    const fc2_2 = extractFCParams('rnet/fc2_2')

    return { ...sharedParams, fc1, prelu4_alpha, fc2_1, fc2_2 }
  }

  function extractONetParams(): ONetParams {

    const sharedParams = extractSharedParams('onet')
    const conv4 = extractConvParams('onet/conv4')
    const prelu4_alpha = extractPReluParams('onet/prelu4_alpha')
    const fc1 = extractFCParams('onet/fc1')
    const prelu5_alpha = extractPReluParams('onet/prelu5_alpha')
    const fc2_1 = extractFCParams('onet/fc2_1')
    const fc2_2 = extractFCParams('onet/fc2_2')
    const fc2_3 = extractFCParams('onet/fc2_3')

    return { ...sharedParams, conv4, prelu4_alpha, fc1, prelu5_alpha, fc2_1, fc2_2, fc2_3 }
  }

  return {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  }

}

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractPNetParams,
    extractRNetParams,
    extractONetParams
  } = extractorsFactory(weightMap, paramMappings)

  const pnet = extractPNetParams()
  const rnet = extractRNetParams()
  const onet = extractONetParams()

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params: { pnet, rnet, onet }, paramMappings }
}