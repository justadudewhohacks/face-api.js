import * as tf from '@tensorflow/tfjs-core';

import { isFloat } from '../utils';
import { extractParams } from './extractParams';
import { mobileNetV1 } from './mobileNetV1';
import { resizeLayer } from './resizeLayer';
import { predictionLayer } from './predictionLayer';

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

      const resized = resizeLayer(imgTensor) as tf.Tensor4D
      const features = mobileNetV1(resized, params.mobilenetv1_params)

      const {
        boxPredictions,
        classPredictions
      } = predictionLayer(features.out, features.conv11, params.prediction_layer_params)

      return {
        boxPredictions,
        classPredictions
      }

    })
  }

  return {
    forward
  }
}