import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { extractParams } from './extractParams';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
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
  ): Promise<tf.Tensor2D> {

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

    const scales = pyramidDown(minFaceSize, scaleFactor, imgTensor.shape.slice(1))
    const out1 = await stage1(imgTensor, scales, scoreThresholds[0], params.pnet)

    // using the inputCanvas to extract and resize the image patches, since it is faster
    // than doing this on the gpu
    const out2 = await stage2(inputCanvas, out1, scoreThresholds[1], params.rnet)



    imgTensor.dispose()
    input.dispose()

    return tf.tensor2d([0], [1, 1])
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