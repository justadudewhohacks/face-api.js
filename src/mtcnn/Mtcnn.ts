import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { extractParams } from './extractParams';
import { stage1 } from './stage1';
import { NetParams } from './types';

export class Mtcnn extends NeuralNetwork<NetParams> {

  constructor() {
    super('Mtcnn')
  }

  public forwardInput(input: NetInput, minFaceSize: number = 20, scaleFactor: number = 0.709): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('Mtcnn - load model before inference')
    }

    return tf.tidy(() => {
      const imgTensor = tf.expandDims(input.inputs[0]).toFloat() as tf.Tensor4D

      function pyramidDown(minFaceSize: number, scaleFactor: number, dims: number[]): number[] {

        const [height, width] = dims
        const m = 12 / minFaceSize

        const scales = []

        let minLayer = Math.min(height, width) * m
        let exp = 0
        while (minLayer >= 12) {
          scales.push(m * Math.pow(scaleFactor, exp))
          minLayer = minLayer * scaleFactor
          exp += 1
        }

        return scales
      }

      const scales = pyramidDown(minFaceSize, scaleFactor, imgTensor.shape)
      const out1 = stage1(imgTensor, scales, params.pnet)

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