import * as tf from '@tensorflow/tfjs-core';

import { BoundingBox } from '../BoundingBox';
import { convLayer } from '../commons/convLayer';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { nonMaxSuppression } from '../commons/nonMaxSuppression';
import { FaceDetection } from '../FaceDetection';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { sigmoid } from '../utils';
import { BOX_ANCHORS, BOX_ANCHORS_SEPARABLE, INPUT_SIZES, IOU_THRESHOLD, NUM_BOXES } from './config';
import { convWithBatchNorm } from './convWithBatchNorm';
import { extractParams } from './extractParams';
import { getDefaultParams } from './getDefaultParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { NetParams, PostProcessingParams, TinyYolov2ForwardParams } from './types';

export class TinyYolov2 extends NeuralNetwork<NetParams> {

  private _hasSeparableConvs: boolean
  private _anchors: Point[]

  constructor(hasSeparableConvs: boolean = false) {
    super('TinyYolov2')
    this._hasSeparableConvs = hasSeparableConvs
    this._anchors = hasSeparableConvs ? BOX_ANCHORS_SEPARABLE : BOX_ANCHORS
  }

  public get hasSeparableConvs(): boolean {
    return this._hasSeparableConvs
  }

  public get anchors(): Point[] {
    return this._anchors
  }

  public forwardInput(input: NetInput, inputSize: number): tf.Tensor4D {

    const { params } = this

    if (!params) {
      throw new Error('TinyYolov2 - load model before inference')
    }

    const out = tf.tidy(() => {
      const batchTensor = input.toBatchTensor(inputSize, false).div(tf.scalar(255)) as tf.Tensor4D

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

    const inputDimensions = {
      width: netInput.getInputWidth(0),
      height: netInput.getInputHeight(0)
    }

    const paddings = new Point(
      (netInput.getPaddings(0).x + netInput.getInputWidth(0)) / netInput.getInputWidth(0),
      (netInput.getPaddings(0).y + netInput.getInputHeight(0)) / netInput.getInputHeight(0)
    )

    const results = this.postProcess(out, { scoreThreshold, paddings })
    const boxes = results.map(res => res.box)
    const scores = results.map(res => res.score)

    out.dispose()

    const indices = nonMaxSuppression(
      boxes.map(box => box.rescale(inputSize)),
      scores,
      IOU_THRESHOLD,
      true
    )

    const detections = indices.map(idx =>
      new FaceDetection(
        scores[idx],
        boxes[idx].toRect(),
        inputDimensions
      )
    )

    return detections
  }

  public postProcess(outputTensor: tf.Tensor4D, { scoreThreshold, paddings }: PostProcessingParams) {

    const numCells = outputTensor.shape[1]

    const [boxesTensor, scoresTensor] = tf.tidy(() => {
      const reshaped = outputTensor.reshape([numCells, numCells, NUM_BOXES, this.hasSeparableConvs ? 5 : 6])

      const boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, NUM_BOXES, 4])
      const scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, NUM_BOXES, 1])
      return [boxes, scores]
    })

    const results = []

    for (let row = 0; row < numCells; row ++) {
      for (let col = 0; col < numCells; col ++) {
        for (let anchor = 0; anchor < NUM_BOXES; anchor ++) {
          const score = sigmoid(scoresTensor.get(row, col, anchor, 0))
          if (score > scoreThreshold) {
            const ctX = ((col + sigmoid(boxesTensor.get(row, col, anchor, 0))) / numCells) * paddings.x
            const ctY = ((row + sigmoid(boxesTensor.get(row, col, anchor, 1))) / numCells) * paddings.y
            const width = ((Math.exp(boxesTensor.get(row, col, anchor, 2)) * this.anchors[anchor].x) / numCells) * paddings.x
            const height = ((Math.exp(boxesTensor.get(row, col, anchor, 3)) * this.anchors[anchor].y) / numCells) * paddings.y

            const x = (ctX - (width / 2))
            const y = (ctY - (height / 2))
            results.push({
              box: new BoundingBox(x, y, x + width, y + height),
              score,
              row,
              col,
              anchor
            })
          }
        }
      }
    }

    boxesTensor.dispose()
    scoresTensor.dispose()

    return results
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights, this.hasSeparableConvs)
  }
}