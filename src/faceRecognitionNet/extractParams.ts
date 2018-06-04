import * as tf from '@tensorflow/tfjs-core';

import { FaceRecognitionNet } from './types';

function isFloat(num: number) {
  return num % 1 !== 0
}

function extractorsFactory(extractWeights: (numWeights: number) => Float32Array) {

  function extractFilterValues(numFilterValues: number, numFilters: number, filterSize: number): tf.Tensor4D {
    const weights = extractWeights(numFilterValues)
    const depth = weights.length / (numFilters * filterSize * filterSize)


    if (isFloat(depth)) {
      throw new Error(`depth has to be an integer: ${depth}, weights.length: ${weights.length}, numFilters: ${numFilters}, filterSize: ${filterSize}`)
    }

    return tf.transpose(
      tf.tensor4d(weights, [numFilters, depth, filterSize, filterSize]),
      [2, 3, 1, 0]
    )
  }

  function extractScaleLayerParams(numWeights: number): FaceRecognitionNet.ScaleLayerParams {
    const weights = tf.tensor1d(extractWeights(numWeights))
    const biases = tf.tensor1d(extractWeights(numWeights))
    return {
      weights,
      biases
    }
  }

  function extractConvLayerParams(numFilterValues: number, numFilters: number, filterSize: number): FaceRecognitionNet.ConvLayerParams {
    const conv_filters = extractFilterValues(numFilterValues, numFilters, filterSize)
    const conv_biases = tf.tensor1d(extractWeights(numFilters))
    const scale = extractScaleLayerParams(numFilters)

    return {
      conv: {
        filters: conv_filters,
        biases: conv_biases
      },
      scale
    }
  }

  function extractResidualLayerParams(numFilterValues: number, numFilters: number, filterSize: number, isDown: boolean = false): FaceRecognitionNet.ResidualLayerParams {
    const conv1: FaceRecognitionNet.ConvLayerParams = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize)
    const conv2: FaceRecognitionNet.ConvLayerParams = extractConvLayerParams(numFilterValues, numFilters, filterSize)

    return {
      conv1,
      conv2
    }
  }

  return {
    extractConvLayerParams,
    extractResidualLayerParams
  }

}

export function extractParams(weights: Float32Array): FaceRecognitionNet.NetParams {
  const extractWeights = (numWeights: number): Float32Array => {
    const ret = weights.slice(0, numWeights)
    weights = weights.slice(numWeights)
    return ret
  }

  const {
    extractConvLayerParams,
    extractResidualLayerParams
  } = extractorsFactory(extractWeights)

  const conv32_down = extractConvLayerParams(4704, 32, 7)
  const conv32_1 = extractResidualLayerParams(9216, 32, 3)
  const conv32_2 = extractResidualLayerParams(9216, 32, 3)
  const conv32_3 = extractResidualLayerParams(9216, 32, 3)

  const conv64_down = extractResidualLayerParams(36864, 64, 3, true)
  const conv64_1 = extractResidualLayerParams(36864, 64, 3)
  const conv64_2 = extractResidualLayerParams(36864, 64, 3)
  const conv64_3 = extractResidualLayerParams(36864, 64, 3)

  const conv128_down = extractResidualLayerParams(147456, 128, 3, true)
  const conv128_1 = extractResidualLayerParams(147456, 128, 3)
  const conv128_2 = extractResidualLayerParams(147456, 128, 3)

  const conv256_down = extractResidualLayerParams(589824, 256, 3, true)
  const conv256_1 = extractResidualLayerParams(589824, 256, 3)
  const conv256_2 = extractResidualLayerParams(589824, 256, 3)
  const conv256_down_out = extractResidualLayerParams(589824, 256, 3)

  const fc = tf.transpose(tf.tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0])

  if (weights.length !== 0) {
    throw new Error(`weights remaing after extract: ${weights.length}`)
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