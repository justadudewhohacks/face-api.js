import * as tf from '@tensorflow/tfjs-core';

import { BoundingBox } from '../BoundingBox';
import { convLayer } from '../commons/convLayer';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { nonMaxSuppression } from '../commons/nonMaxSuppression';
import { FaceDetection } from '../FaceDetection';
import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { BOX_ANCHORS, INPUT_SIZES, IOU_THRESHOLD, NUM_BOXES } from './config';
import { convWithBatchNorm } from './convWithBatchNorm';
import { extractParams } from './extractParams';
import { getDefaultParams } from './getDefaultParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { NetParams, TinyYolov2ForwardParams } from './types';

export class TinyYolov2 extends NeuralNetwork<NetParams> {

  constructor() {
    super('TinyYolov2')
  }

  public forwardInput(input: NetInput, inputSize: number): tf.Tensor4D {

    const { params } = this

    if (!params) {
      throw new Error('TinyYolov2 - load model before inference')
    }

    const out = tf.tidy(() => {
      const batchTensor = input.toBatchTensor(inputSize, false).div(tf.scalar(255)).toFloat() as tf.Tensor4D

      let out = convWithBatchNorm(batchTensor, params.conv0)
      out = tf.maxPool(out, [2, 2], [2, 2], 'same')
      out = convWithBatchNorm(out, params.conv1)
      out = tf.maxPool(out, [2, 2], [2, 2], 'same')
      out = convWithBatchNorm(out, params.conv2)
      out = tf.maxPool(out, [2, 2], [2, 2], 'same')
      out = convWithBatchNorm(out, params.conv3)
      out = tf.maxPool(out, [2, 2], [2, 2], 'same')
      out = convWithBatchNorm(out, params.conv4)
      out = tf.maxPool(out, [2, 2], [2, 2], 'same')
      out = convWithBatchNorm(out, params.conv5)
      out = tf.maxPool(out, [2, 2], [1, 1], 'same')
      out = convWithBatchNorm(out, params.conv6)
      out = convWithBatchNorm(out, params.conv7)
      out = convLayer(out, params.conv8, 'valid', false)

      return out
    })

    return out
  }

  public async forward(input: TNetInput, inputSize: number): Promise<tf.Tensor4D> {
    return await this.forwardInput(await toNetInput(input, true, true), inputSize)
  }

  public async locateFaces(input: TNetInput, forwardParams: TinyYolov2ForwardParams = {}): Promise<FaceDetection[]> {

    const { inputSize: _inputSize, scoreThreshold } = getDefaultParams(forwardParams)

    const inputSize = typeof _inputSize === 'string'
      ? INPUT_SIZES[_inputSize]
      : _inputSize

    if (typeof inputSize !== 'number') {
      throw new Error(`TinyYolov2 - unkown inputSize: ${inputSize}, expected number or one of xs | sm | md | lg`)
    }

    const netInput = await toNetInput(input, true)
    const out = await this.forwardInput(netInput, inputSize)
    const numCells = out.shape[1]

    const [boxesTensor, scoresTensor] = tf.tidy(() => {
      const reshaped = out.reshape([numCells, numCells, NUM_BOXES, 6])
      out.dispose()

      const boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, NUM_BOXES, 4])
      const scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, NUM_BOXES, 1])
      return [boxes, scores]
    })

    const expit = (x: number): number => 1 / (1 + Math.exp(-x))

    const paddedHeightRelative = (netInput.getPaddings(0).y + netInput.getInputHeight(0)) / netInput.getInputHeight(0)
    const paddedWidthRelative = (netInput.getPaddings(0).x + netInput.getInputWidth(0)) / netInput.getInputWidth(0)

    const boxes: BoundingBox[] = []
    const scores: number[] = []

    for (let row = 0; row < numCells; row ++) {
      for (let col = 0; col < numCells; col ++) {
        for (let box = 0; box < NUM_BOXES; box ++) {
          const score = expit(scoresTensor.get(row, col, box, 0))
          if (score > scoreThreshold) {
            const ctX = ((col + expit(boxesTensor.get(row, col, box, 0))) / numCells) * paddedWidthRelative
            const ctY = ((row + expit(boxesTensor.get(row, col, box, 1))) / numCells) * paddedHeightRelative
            const width = ((Math.exp(boxesTensor.get(row, col, box, 2)) * BOX_ANCHORS[box].x) / numCells) * paddedWidthRelative
            const height = ((Math.exp(boxesTensor.get(row, col, box, 3)) * BOX_ANCHORS[box].y) / numCells) * paddedHeightRelative

            const x = (ctX - (width / 2))
            const y = (ctY - (height / 2))
            boxes.push(new BoundingBox(x, y, x + width, y + height))
            scores.push(score)
          }
        }
      }
    }

    boxesTensor.dispose()
    scoresTensor.dispose()

    const indices = nonMaxSuppression(
      boxes.map(box => new BoundingBox(
        box.left * inputSize,
        box.top * inputSize,
        box.right * inputSize,
        box.bottom * inputSize
      )),
      scores,
      IOU_THRESHOLD,
      true
    )

    const detections = indices.map(idx =>
      new FaceDetection(
        scores[idx],
        boxes[idx].toRect(),
        { width: netInput.getInputWidth(0), height: netInput.getInputHeight(0) }
      )
    )

    return detections
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}