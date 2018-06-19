import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from '../getImageTensor';
import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
import { TNetInput, Dimensions } from '../types';
import { extractParams } from './extractParams';
import { FaceDetection } from './FaceDetection';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { resizeLayer } from './resizeLayer';
import { Rect } from '../Rect';

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

  function forward(input: tf.Tensor | NetInput | TNetInput) {
    return tf.tidy(
      () => forwardTensor(padToSquare(getImageTensor(input)))
    )
  }

  async function locateFaces(
    input: tf.Tensor | NetInput | TNetInput,
    minConfidence: number = 0.8,
    maxResults: number = 100,
  ): Promise<FaceDetection[]> {

    let paddedHeightRelative = 1, paddedWidthRelative = 1
    let imageDimensions: Dimensions | undefined

    const {
      boxes: _boxes,
      scores: _scores
    } = tf.tidy(() => {

      let imgTensor = getImageTensor(input)
      const [height, width] = imgTensor.shape.slice(1)
      imageDimensions = { width, height }

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
    const scoresData = Array.from(await scores.data())

    const iouThreshold = 0.5
    const indices = nonMaxSuppression(
      boxes,
      scoresData,
      maxResults,
      iouThreshold,
      minConfidence
    )

    const results = indices
      .map(idx => {
        const [top, bottom] = [
          Math.max(0, boxes.get(idx, 0)),
          Math.min(1.0, boxes.get(idx, 2))
        ].map(val => val * paddedHeightRelative)
        const [left, right] = [
          Math.max(0, boxes.get(idx, 1)),
          Math.min(1.0, boxes.get(idx, 3))
        ].map(val => val * paddedWidthRelative)
        return new FaceDetection(
          scoresData[idx],
          new Rect(
            left,
            top,
            right - left,
            bottom - top
          ),
          imageDimensions as Dimensions
        )
      })

    boxes.dispose()
    scores.dispose()

    return results
  }

  return {
    forward,
    locateFaces
  }
}