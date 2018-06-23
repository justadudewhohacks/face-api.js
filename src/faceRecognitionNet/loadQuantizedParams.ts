import { isTensor1D, isTensor2D, isTensor4D } from '../commons/isTensor';
import { loadWeightMap } from '../commons/loadWeightMap';
import { ConvLayerParams, ResidualLayerParams, ScaleLayerParams } from './types';

const DEFAULT_MODEL_NAME = 'face_recognition_model'

function extractorsFactory(weightMap: any) {

  function extractScaleLayerParams(prefix: string): ScaleLayerParams {
    const params = {
      weights: weightMap[`${prefix}/scale/weights`],
      biases: weightMap[`${prefix}/scale/biases`]
    }

    if (!isTensor1D(params.weights)) {
      throw new Error(`expected weightMap[${prefix}/scale/weights] to be a Tensor1D, instead have ${params.weights}`)
    }

    if (!isTensor1D(params.biases)) {
      throw new Error(`expected weightMap[${prefix}/scale/biases] to be a Tensor1D, instead have ${params.biases}`)
    }

    return params
  }

  function extractConvLayerParams(prefix: string): ConvLayerParams {
    const params = {
      filters: weightMap[`${prefix}/conv/filters`],
      bias: weightMap[`${prefix}/conv/bias`]
    }

    if (!isTensor4D(params.filters)) {
      throw new Error(`expected weightMap[${prefix}/conv/filters] to be a Tensor1D, instead have ${params.filters}`)
    }

    if (!isTensor1D(params.bias)) {
      throw new Error(`expected weightMap[${prefix}/conv/bias] to be a Tensor1D, instead have ${params.bias}`)
    }

    return {
      conv: params,
      scale: extractScaleLayerParams(prefix)
    }
  }

  function extractResidualLayerParams(prefix: string): ResidualLayerParams {
    return {
      conv1: extractConvLayerParams(`${prefix}/conv1`),
      conv2: extractConvLayerParams(`${prefix}/conv2`)
    }
  }

  return {
    extractConvLayerParams,
    extractResidualLayerParams
  }

}

export async function loadQuantizedParams(uri: string | undefined): Promise<any> {
  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)

  const {
    extractConvLayerParams,
    extractResidualLayerParams
  } = extractorsFactory(weightMap)

  const conv32_down = extractConvLayerParams('conv32_down')
  const conv32_1 = extractResidualLayerParams('conv32_1')
  const conv32_2 = extractResidualLayerParams('conv32_2')
  const conv32_3 = extractResidualLayerParams('conv32_3')

  const conv64_down = extractResidualLayerParams('conv64_down')
  const conv64_1 = extractResidualLayerParams('conv64_1')
  const conv64_2 = extractResidualLayerParams('conv64_2')
  const conv64_3 = extractResidualLayerParams('conv64_3')

  const conv128_down = extractResidualLayerParams('conv128_down')
  const conv128_1 = extractResidualLayerParams('conv128_1')
  const conv128_2 = extractResidualLayerParams('conv128_2')

  const conv256_down = extractResidualLayerParams('conv256_down')
  const conv256_1 = extractResidualLayerParams('conv256_1')
  const conv256_2 = extractResidualLayerParams('conv256_2')
  const conv256_down_out = extractResidualLayerParams('conv256_down_out')

  const fc = weightMap['fc']

  if (!isTensor2D(fc)) {
    throw new Error(`expected weightMap[fc] to be a Tensor2D, instead have ${fc}`)
  }

  return {
    conv32_down,
    conv32_1,
    conv32_2,
    conv32_3,
    conv64_down,
    conv64_1,
    conv64_2,
    conv64_3,
    conv128_down,
    conv128_1,
    conv128_2,
    conv256_down,
    conv256_1,
    conv256_2,
    conv256_down_out,
    fc
  }
}