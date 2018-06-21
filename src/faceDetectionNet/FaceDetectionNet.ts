import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from '../getImageTensor';
import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
import { Rect } from '../Rect';
import { Dimensions, TNetInput } from '../types';
import { extractParams } from './extractParams';
import { FaceDetection } from './FaceDetection';
import { loadQuantizedParams } from './loadQuantizedParams';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { resizeLayer } from './resizeLayer';
import { NetParams } from './types';

export class FaceDetectionNet {

  private _params: NetParams

  public async load(weightsOrUrl: Float32Array | string | undefined): Promise<void> {
    if (weightsOrUrl instanceof Float32Array) {
      this.extractWeights(weightsOrUrl)
      return
    }

    if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
      throw new Error('FaceDetectionNet.load - expected model uri, or weights as Float32Array')
    }
    this._params = await loadQuantizedParams(weightsOrUrl)
  }

  public extractWeights(weights: Float32Array) {
    this._params = extractParams(weights)
  }

  private forwardTensor(imgTensor: tf.Tensor4D) {
    if (!this._params) {
      throw new Error('FaceDetectionNet - load model before inference')
    }

    return tf.tidy(() => {

      const resized = resizeLayer(imgTensor) as tf.Tensor4D
      const features = mobileNetV1(resized, this._params.mobilenetv1_params)

      const {
        boxPredictions,
        classPredictions
      } = predictionLayer(features.out, features.conv11, this._params.prediction_layer_params)

      return outputLayer(boxPredictions, classPredictions, this._params.output_layer_params)
    })
  }

  public forward(input: tf.Tensor | NetInput | TNetInput) {
    return tf.tidy(
      () => this.forwardTensor(padToSquare(getImageTensor(input)))
    )
  }

  public async locateFaces(
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

      return this.forwardTensor(imgTensor)
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
}