import * as tf from '@tensorflow/tfjs-core';

import { isFloat } from '../utils';
import { extractParams } from './extractParams';
import { mobileNetV1 } from './mobileNetV1';
import { resizeLayer } from './resizeLayer';

function fromData(input: number[]): tf.Tensor4D {
  const pxPerChannel = input.length / 3
  const dim = Math.sqrt(pxPerChannel)

  if (isFloat(dim)) {
    throw new Error(`invalid input size: ${dim}x${dim}x3 (array length: ${input.length})`)
  }

  return tf.tensor4d(input as number[], [1, 580, 580, 3])
}

function fromImageData(input: ImageData[]) {
  const idx = input.findIndex(data => !(data instanceof ImageData))
  if (idx !== -1) {
    throw new Error(`expected input at index ${idx} to be instanceof ImageData`)
  }

  const imgTensors = input
    .map(data => tf.fromPixels(data))
    .map(data => tf.expandDims(data, 0)) as tf.Tensor4D[]

  return tf.cast(tf.concat(imgTensors, 0), 'float32')
}

export function faceDetectionNet(weights: Float32Array) {
  const params = extractParams(weights)

  async function forward(input: ImageData|ImageData[]|number[]) {
    return tf.tidy(() => {

      const imgDataArray = input instanceof ImageData
        ? [input]
        : (
          input[0] instanceof ImageData
            ? input as ImageData[]
            : null
        )

      const imgTensor = imgDataArray !== null
        ? fromImageData(imgDataArray)
        : fromData(input as number[])

      let out = resizeLayer(imgTensor) as tf.Tensor4D
      out = mobileNetV1(out, params.mobilenetv1_params)



      // boxpredictor0: FeatureExtractor/MobilenetV1/MobilenetV1/Conv2d_11_pointwise/Relu6
      // boxpredictor1: FeatureExtractor/MobilenetV1/MobilenetV1/Conv2d_11_pointwise/Relu6
      // boxpredictor2: FeatureExtractor/MobilenetV1/Conv2d_13_pointwise_2_Conv2d_2_3x3_s2_512/Relu6
      // boxpredictor3: FeatureExtractor/MobilenetV1/Conv2d_13_pointwise_2_Conv2d_3_3x3_s2_256/Relu6
      // boxpredictor4: FeatureExtractor/MobilenetV1/Conv2d_13_pointwise_2_Conv2d_4_3x3_s2_256/Relu6
      // boxpredictor5: FeatureExtractor/MobilenetV1/Conv2d_13_pointwise_2_Conv2d_5_3x3_s2_128/Relu6

      return out

    })
  }

  return {
    forward
  }
}