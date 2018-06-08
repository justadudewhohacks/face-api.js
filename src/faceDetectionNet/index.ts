import * as tf from '@tensorflow/tfjs-core';

import { isFloat } from '../utils';
import { extractParams } from './extractParams';
import { FaceDetectionResult } from './FaceDetectionResult';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { resizeLayer } from './resizeLayer';

function fromData(input: number[]): tf.Tensor4D {
  const pxPerChannel = input.length / 3
  const dim = Math.sqrt(pxPerChannel)

  if (isFloat(dim)) {
    throw new Error(`invalid input size: ${dim}x${dim}x3 (array length: ${input.length})`)
  }

  return tf.tensor4d(input as number[], [1, dim, dim, 3])
}

function fromImageData(input: ImageData[]) {
  return tf.tidy(() => {
    const idx = input.findIndex(data => !(data instanceof ImageData))
    if (idx !== -1) {
      throw new Error(`expected input at index ${idx} to be instanceof ImageData`)
    }

    const imgTensors = input
      .map(data => tf.fromPixels(data))
      .map(data => tf.expandDims(data, 0)) as tf.Tensor4D[]

    return tf.cast(tf.concat(imgTensors, 0), 'float32')
  })
}

function padToSquare(imgTensor: tf.Tensor4D): tf.Tensor4D {
  return tf.tidy(() => {

    const [_, height, width] = imgTensor.shape
    if (height === width) {
      return imgTensor
    }

    if (height > width) {
      const pad = tf.fill([1, height, height - width, 3], 0) as tf.Tensor4D
      return tf.concat([imgTensor, pad], 2)
    }
    const pad = tf.fill([1, width - height, width, 3], 0) as tf.Tensor4D
    return tf.concat([imgTensor, pad], 1)
  })
}

function getImgTensor(input: tf.Tensor|HTMLCanvasElement|ImageData|ImageData[]|number[]) {
  return tf.tidy(() => {
    if (input instanceof HTMLCanvasElement) {
      return tf.cast(
        tf.expandDims(tf.fromPixels(input), 0), 'float32'
      ) as tf.Tensor4D
    }
    if (input instanceof tf.Tensor) {
      const rank = input.shape.length
      if (rank !== 3 && rank !== 4) {
        throw new Error('input tensor must be of rank 3 or 4')
      }
      return tf.cast(
        rank === 3 ? tf.expandDims(input, 0) : input, 'float32'
      ) as tf.Tensor4D
    }

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

  function forward(input: tf.Tensor|ImageData|ImageData[]|number[]) {
    return tf.tidy(
      () => forwardTensor(padToSquare(getImgTensor(input)))
    )
  }

  async function locateFaces(
    input: tf.Tensor|HTMLCanvasElement|ImageData|ImageData[]|number[],
    minConfidence: number = 0.8,
    maxResults: number = 100,
  ): Promise<FaceDetectionResult[]> {

    let paddedHeightRelative = 1, paddedWidthRelative = 1

    const {
      boxes: _boxes,
      scores: _scores
    } = tf.tidy(() => {

      let imgTensor = getImgTensor(input)
      const [_, height, width] = imgTensor.shape

      imgTensor = padToSquare(imgTensor)
      paddedHeightRelative = imgTensor.shape[1] / height
      paddedWidthRelative = imgTensor.shape[2] / width

      return forwardTensor(imgTensor)
    })

    // TODO batches
    const boxes = _boxes[0]
    const scores = _scores[0]
    for (let i = 1; i < _boxes.length; i++) {
      _boxes[i].dispose()
      _scores[i].dispose()
    }

    // TODO find a better way to filter by minConfidence
    //const ts = Date.now()
    const scoresData = Array.from(await scores.data())
    //console.log('await data:', (Date.now() - ts))

    const iouThreshold = 0.5
    const indices = nonMaxSuppression(
      boxes,
      scoresData,
      maxResults,
      iouThreshold,
      minConfidence
    )

    const results = indices
      .map(idx => new FaceDetectionResult(
        scoresData[idx],
        boxes.get(idx, 0) * paddedHeightRelative,
        boxes.get(idx, 1) * paddedWidthRelative,
        boxes.get(idx, 2) * paddedHeightRelative,
        boxes.get(idx, 3) * paddedWidthRelative
      ))

    boxes.dispose()
    scores.dispose()

    return results
  }

  return {
    forward,
    locateFaces
  }
}