import * as tf from '@tensorflow/tfjs-core';

import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { convDown } from './convLayer';
import { extractParams } from './extractParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { normalize } from './normalize';
import { residual, residualDown } from './residualLayer';
import { NetParams } from './types';

export class FaceRecognitionNet extends NeuralNetwork<NetParams> {

  constructor() {
    super('FaceRecognitionNet')
  }

  public forwardInput(input: NetInput): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('FaceRecognitionNet - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(150, true)

      const normalized = normalize(batchTensor)

      let out = convDown(normalized, params.conv32_down)
      out = tf.maxPool(out, 3, 2, 'valid')

      out = residual(out, params.conv32_1)
      out = residual(out, params.conv32_2)
      out = residual(out, params.conv32_3)

      out = residualDown(out, params.conv64_down)
      out = residual(out, params.conv64_1)
      out = residual(out, params.conv64_2)
      out = residual(out, params.conv64_3)

      out = residualDown(out, params.conv128_down)
      out = residual(out, params.conv128_1)
      out = residual(out, params.conv128_2)

      out = residualDown(out, params.conv256_down)
      out = residual(out, params.conv256_1)
      out = residual(out, params.conv256_2)
      out = residualDown(out, params.conv256_down_out)

      const globalAvg = out.mean([1, 2]) as tf.Tensor2D
      const fullyConnected = tf.matMul(globalAvg, params.fc)

      return fullyConnected
    })
  }

  public async forward(input: TNetInput): Promise<tf.Tensor2D> {
    return this.forwardInput(await toNetInput(input, true))
  }

  public async computeFaceDescriptor(input: TNetInput): Promise<Float32Array|Float32Array[]> {
    const netInput = await toNetInput(input, true)

    const faceDescriptorTensors = tf.tidy(
      () => tf.unstack(this.forwardInput(netInput))
    )

    const faceDescriptorsForBatch = await Promise.all(faceDescriptorTensors.map(
      t => t.data()
    )) as Float32Array[]

    faceDescriptorTensors.forEach(t => t.dispose())

    return netInput.isBatchInput
      ? faceDescriptorsForBatch
      : faceDescriptorsForBatch[0]
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}