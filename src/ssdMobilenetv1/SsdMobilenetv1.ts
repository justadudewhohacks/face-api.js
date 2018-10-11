import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, Rect, TNetInput, toNetInput } from 'tfjs-image-recognition-base';

import { FaceDetection } from '../classes/FaceDetection';
import { extractParams } from './extractParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { NetParams, ISsdMobilenetv1Options } from './types';
import { SsdMobilenetv1Options } from './SsdMobilenetv1Options';

export class SsdMobilenetv1 extends NeuralNetwork<NetParams> {

  constructor() {
    super('SsdMobilenetv1')
  }

  public forwardInput(input: NetInput) {

    const { params } = this

    if (!params) {
      throw new Error('SsdMobilenetv1 - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(512, false).toFloat()

      const x = tf.sub(tf.mul(batchTensor, tf.scalar(0.007843137718737125)), tf.scalar(1)) as tf.Tensor4D
      const features = mobileNetV1(x, params.mobilenetv1)

      const {
        boxPredictions,
        classPredictions
      } = predictionLayer(features.out, features.conv11, params.prediction_layer)

      return outputLayer(boxPredictions, classPredictions, params.output_layer)
    })
  }

  public async forward(input: TNetInput) {
    return this.forwardInput(await toNetInput(input))
  }

  public async locateFaces(
    input: TNetInput,
    options: ISsdMobilenetv1Options = {}
  ): Promise<FaceDetection[]> {

    const { maxResults, minConfidence } = new SsdMobilenetv1Options(options)

    const netInput = await toNetInput(input)

    const {
      boxes: _boxes,
      scores: _scores
    } = this.forwardInput(netInput)


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

    const reshapedDims = netInput.getReshapedInputDimensions(0)
    const inputSize = netInput.inputSize as number
    const padX = inputSize / reshapedDims.width
    const padY = inputSize / reshapedDims.height

    const results = indices
      .map(idx => {
        const [top, bottom] = [
          Math.max(0, boxes.get(idx, 0)),
          Math.min(1.0, boxes.get(idx, 2))
        ].map(val => val * padY)
        const [left, right] = [
          Math.max(0, boxes.get(idx, 1)),
          Math.min(1.0, boxes.get(idx, 3))
        ].map(val => val * padX)
        return new FaceDetection(
          scoresData[idx],
          new Rect(
            left,
            top,
            right - left,
            bottom - top
          ),
          {
            height: netInput.getInputHeight(0),
            width: netInput.getInputWidth(0)
          }
        )
      })

    boxes.dispose()
    scores.dispose()

    return results
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}