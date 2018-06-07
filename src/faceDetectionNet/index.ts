import * as tf from '@tensorflow/tfjs-core';

import { isFloat } from '../utils';
import { extractParams } from './extractParams';
import { mobileNetV1 } from './mobileNetV1';
import { resizeLayer } from './resizeLayer';
import { predictionLayer } from './predictionLayer';
import { outputLayer } from './outputLayer';
import { nonMaxSuppression } from './nonMaxSuppression';
import { FaceDetectionNet } from './types';

function fromData(input: number[]): tf.Tensor4D {
  const pxPerChannel = input.length / 3
  const dim = Math.sqrt(pxPerChannel)

  if (isFloat(dim)) {
    throw new Error(`invalid input size: ${dim}x${dim}x3 (array length: ${input.length})`)
  }

  return tf.tensor4d(input as number[], [1, dim, dim, 3])
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

function getImgTensor(input: ImageData|ImageData[]|number[]) {
  return tf.tidy(() => {

    const imgDataArray = input instanceof ImageData
      ? [input]
      : (
        input[0] instanceof ImageData
          ? input as ImageData[]
          : null
      )

    return imgDataArray !== null
      ? fromImageData(imgDataArray)
      : fromData(input as number[])

  })
}

export function faceDetectionNet(weights: Float32Array) {
  const params = extractParams(weights)

  function forwardTensor(imgTensor: tf.Tensor4D) {
    return tf.tidy(() => {

      const resized = resizeLayer(imgTensor) as tf.Tensor4D
      const features = mobileNetV1(resized, params.mobilenetv1_params)

      const {
        boxPredictions,
        classPredictions
      } = predictionLayer(features.out, features.conv11, params.prediction_layer_params)

      return outputLayer(boxPredictions, classPredictions, params.output_layer_params)
    })
  }

  function forward(input: ImageData|ImageData[]|number[]) {
    return tf.tidy(
      () => forwardTensor(getImgTensor(input))
    )
  }

  async function locateFaces(
    input: ImageData|ImageData[]|number[],
    minConfidence: number = 0.8,
    maxResults: number = 100,
  ): Promise<FaceDetectionNet.Detection[]> {
    const imgTensor = getImgTensor(input)

    const [_, height, width] = imgTensor.shape

    const {
      boxes: _boxes,
      scores: _scores
    } = forwardTensor(imgTensor)

    // TODO batches
    const boxes = _boxes[0]
    const scores = _scores[0]

    // TODO find a better way to filter by minConfidence
    const scoresData = Array.from(await scores.data())

    const iouThreshold = 0.5
    const indices = nonMaxSuppression(
      boxes,
      scoresData,
      maxResults,
      iouThreshold,
      minConfidence
    )

    return indices
      .map(idx => ({
        score: scoresData[idx],
        box: {
          top: Math.max(0, height * boxes.get(idx, 0)),
          left: Math.max(0, width * boxes.get(idx, 1)),
          bottom: Math.min(height, height * boxes.get(idx, 2)),
          right: Math.min(width, width * boxes.get(idx, 3))
        }
      }))

  }

  return {
    forward,
    locateFaces
  }
}