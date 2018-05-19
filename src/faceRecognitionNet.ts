import * as tf from '@tensorflow/tfjs-core';

function scale(x: tf.Tensor4D, params: ScaleLayerParams): tf.Tensor4D {
  return tf.add(tf.mul(x, params.weights), params.biases)
}

function createConvLayer(stride: number, withRelu: boolean) {
  return function (x: tf.Tensor4D, params: ConvBlockParams, useValidPadding: boolean = false): tf.Tensor4D {
    const { filters, biases } = params.conv

    let out = tf.conv2d(x, filters, [stride, stride], useValidPadding ? 'valid' : 'same')
    out = tf.add(out, biases)
    out = scale(out, params.scale)
    return withRelu ? tf.relu(out) : out
  }
}

function createResBlock() {
  const conv = createConvLayer(1, true)
  const convNoRelu = createConvLayer(1, false)

  return function (x: tf.Tensor4D, params: ResBlockParams): tf.Tensor4D {
    let out = conv(x, params.conv1)
    out = convNoRelu(out, params.conv2)
    out = tf.add(out, x)
    out = tf.relu(out)
    return out
  }
}

function createReduceDimsBlock() {
  const convReduceDims = createConvLayer(2, true)
  const convNoRelu = createConvLayer(1, false)

  return function (x: tf.Tensor4D, params: ResBlockParams, useValidPadding: boolean = false): tf.Tensor4D {
    let out = convReduceDims(x, params.conv1, useValidPadding)
    out = convNoRelu(out, params.conv2)

    let pooled = tf.avgPool(x, 2, 2, useValidPadding ? 'valid' : 'same') as tf.Tensor4D
    const zeros = tf.zeros<tf.Rank.R4>(pooled.shape)
    const isPad = pooled.shape[3] !== out.shape[3]
    const isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2]

    if (isAdjustShape) {
      const padShapeX = [...out.shape] as [number, number, number, number]
      padShapeX[1] = 1
      const zerosW = tf.zeros<tf.Rank.R4>(padShapeX)
      out = tf.concat([out, zerosW], 1)

      const padShapeY = [...out.shape] as [number, number, number, number]
      padShapeY[2] = 1
      const zerosH = tf.zeros<tf.Rank.R4>(padShapeY)
      out = tf.concat([out, zerosH], 2)
    }

    pooled = isPad ? tf.concat([pooled, zeros], 3) : pooled
    out = tf.add(pooled, out) as tf.Tensor4D

    out = tf.relu(out)
    return out
  }
}

function normalize(arr: number[]) {
  const avg_r = 122.782;
  const avg_g = 117.001;
  const avg_b = 104.298;
  const avgs = [avg_r, avg_g, avg_b]
  return arr.map((val, i) => {
    const avg = avgs[i % 3]
    return (val - avg) / 256
  })
}

function computeFaceDescriptor(input: number[], params: ParamMap) {
  const conv32_in = createConvLayer(2, true)
  const res32 = createResBlock()
  const reduceDims64 = createReduceDimsBlock()
  const reduceDims128 = createReduceDimsBlock()

  const reduceDims256 = createReduceDimsBlock()
  const res64 = createResBlock()
  const res128 = createResBlock()
  const res256 = createResBlock()

  const x = tf.tensor4d(normalize(input), [1, 150, 150, 3])

  let out = conv32_in(x, params.conv32_in, true)
  out = tf.maxPool(out, 3, 2, 'valid')

  out = res32(out, params.conv32_1)
  out = res32(out, params.conv32_2)
  out = res32(out, params.conv32_3)


  out = reduceDims64(out, params.conv64_in, true)
  out = res64(out, params.conv64_1)
  out = res64(out, params.conv64_2)
  out = res64(out, params.conv64_3)

  out = reduceDims128(out, params.conv128_in, true)
  out = res128(out, params.conv128_1)
  out = res128(out, params.conv128_2)

  out = reduceDims256(out, params.conv256_in, true)
  out = res256(out, params.conv256_1)
  out = res256(out, params.conv256_2)
  out = reduceDims256(out, params.conv256_3, true)


  // global average pooling of each of the 256 filters -> retrieve 256 entry vector
  const global_avg = out.mean([1, 2]) as tf.Tensor2D

  // fully connected
  // TODO: kind of slow here
  return Array.from(tf.matMul(global_avg, params.fc).dataSync())
}

export type ConvLayerParams = {
  filters: tf.Tensor4D
  biases: tf.Tensor1D
}

export type ScaleLayerParams = {
  weights: tf.Tensor1D
  biases: tf.Tensor1D
}

export type ConvBlockParams = {
  conv: ConvLayerParams
  scale: ScaleLayerParams
}

export type ResBlockParams = {
  conv1: ConvBlockParams
  conv2: ConvBlockParams
}

export type ParamMap = {
  conv32_in: ConvBlockParams
  conv32_1: ResBlockParams
  conv32_2: ResBlockParams
  conv32_3: ResBlockParams
  conv64_in: ResBlockParams
  conv64_1: ResBlockParams
  conv64_2: ResBlockParams
  conv64_3: ResBlockParams
  conv128_in: ResBlockParams
  conv128_1: ResBlockParams
  conv128_2: ResBlockParams
  conv256_in: ResBlockParams
  conv256_1: ResBlockParams
  conv256_2: ResBlockParams
  conv256_3: ResBlockParams
  fc: tf.Tensor2D
}

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

  function extractScaleLayerParams(numWeights: number): ScaleLayerParams {
    const weights = tf.tensor1d(extractWeights(numWeights))
    const biases = tf.tensor1d(extractWeights(numWeights))
    return {
      weights,
      biases
    }
  }

  function extractConvBlockParams(numFilterValues: number, numFilters: number, filterSize: number): ConvBlockParams {
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

  function extractResBlockParams(numFilterValues: number, numFilters: number, filterSize: number, isInBlock: boolean = false): ResBlockParams {
    const conv1: ConvBlockParams = extractConvBlockParams((isInBlock ? 0.5 : 1) * numFilterValues, numFilters, filterSize)
    const conv2: ConvBlockParams = extractConvBlockParams(numFilterValues, numFilters, filterSize)

    return {
      conv1,
      conv2
    }
  }

  return {
    extractConvBlockParams,
    extractResBlockParams
  }

}

function extractParams(weights: Float32Array): ParamMap {
  const extractWeights = (numWeights: number): Float32Array => {
    const ret = weights.slice(0, numWeights)
    weights = weights.slice(numWeights)
    return ret
  }

  const {
    extractConvBlockParams,
    extractResBlockParams
  } = extractorsFactory(extractWeights)

  const conv32_in = extractConvBlockParams(4704, 32, 7)
  const conv32_1 = extractResBlockParams(9216, 32, 3)
  const conv32_2 = extractResBlockParams(9216, 32, 3)
  const conv32_3 = extractResBlockParams(9216, 32, 3)

  const conv64_in = extractResBlockParams(36864, 64, 3, true)
  const conv64_1 = extractResBlockParams(36864, 64, 3)
  const conv64_2 = extractResBlockParams(36864, 64, 3)
  const conv64_3 = extractResBlockParams(36864, 64, 3)

  const conv128_in = extractResBlockParams(147456, 128, 3, true)
  const conv128_1 = extractResBlockParams(147456, 128, 3)
  const conv128_2 = extractResBlockParams(147456, 128, 3)

  const conv256_in = extractResBlockParams(589824, 256, 3, true)
  const conv256_1 = extractResBlockParams(589824, 256, 3)
  const conv256_2 = extractResBlockParams(589824, 256, 3)
  const conv256_3 = extractResBlockParams(589824, 256, 3)

  const fc = tf.transpose(tf.tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0])

  if (weights.length !== 0) {
    throw new Error(`weights remaing after extract: ${weights.length}`)
  }

  return {
    conv32_in,
    conv32_1,
    conv32_2,
    conv32_3,
    conv64_in,
    conv64_1,
    conv64_2,
    conv64_3,
    conv128_in,
    conv128_1,
    conv128_2,
    conv256_in,
    conv256_1,
    conv256_2,
    conv256_3,
    fc
  }
}

export function faceRecognitionNet(weights: Float32Array) {
  const params = extractParams(weights)

  return function(input: number[]) {
    return computeFaceDescriptor(input, params)
  }
}