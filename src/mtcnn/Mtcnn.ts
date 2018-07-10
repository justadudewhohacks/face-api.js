import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { Rect } from '../Rect';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { extractParams } from './extractParams';
import { FaceLandmarks5 } from './FaceLandmarks5';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
import { NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public async forwardInput(
    input: NetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): Promise<any> {

    const { params } = this

    if (!params) {
      throw new Error('Mtcnn - load model before inference')
    }

    const inputTensor = input.inputs[0]
    const inputCanvas = input.canvases[0]

    if (!inputCanvas) {
      throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.')
    }

    const imgTensor = tf.tidy(() =>
      bgrToRgbTensor(
        tf.expandDims(inputTensor).toFloat() as tf.Tensor4D
      )
    )

    const [height, width] = imgTensor.shape.slice(1)

    const scales = pyramidDown(minFaceSize, scaleFactor, [height, width])
    const out1 = await stage1(imgTensor, scales, scoreThresholds[0], params.pnet)

    // using the inputCanvas to extract and resize the image patches, since it is faster
    // than doing this on the gpu
    const out2 = await stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet)
    const out3 = await stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet)

    imgTensor.dispose()
    input.dispose()

    const faceDetections = out3.boxes.map((box, idx) =>
      new FaceDetection(
        out3.scores[idx],
        new Rect(
          box.left / width,
          box.top / height,
          box.width / width,
          box.height / height
        ),
        {
          height,
          width
        }
      )
    )

    const faceLandmarks = out3.points.map(pts =>
      new FaceLandmarks5(
        pts.map(pt => pt.div(new Point(width, height))),
        { width, height }
      )
    )

    return {
      faceDetections,
      faceLandmarks
    }
  }

  public async forward(
    input: TNetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): Promise<tf.Tensor2D> {
    return this.forwardInput(
      await toNetInput(input, true, true),
      minFaceSize,
      scaleFactor,
      scoreThresholds
    )
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}