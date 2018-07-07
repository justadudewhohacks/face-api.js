import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { extractParams } from './extractParams';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public forwardInput(
    input: NetInput,
    minFaceSize: number = 20,
    scaleFactor: number = 0.709,
    scoreThresholds: number[] = [0.6, 0.7, 0.7]
  ): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('Mtcnn - load model before inference')
    }

    return tf.tidy(() => {
      // TODO: expects bgr input?
      let imgTensor = bgrToRgbTensor(
        tf.expandDims(input.inputs[0]).toFloat() as tf.Tensor4D
      )

      const scales = pyramidDown(minFaceSize, scaleFactor, imgTensor.shape.slice(1))

      const out1 = stage1(imgTensor, scales, scoreThresholds[0], params.pnet)

      return tf.tensor2d([0], [1, 1])
    })
  }

  public async forward(input: TNetInput): Promise<tf.Tensor2D> {
    return this.forwardInput(await toNetInput(input, true))
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}