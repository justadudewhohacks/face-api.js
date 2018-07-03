import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../NetInput';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { convDown } from './convLayer';
import { extractParams } from './extractParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { normalize } from './normalize';
import { residual, residualDown } from './residualLayer';
import { NetParams } from './types';

export class FaceRecognitionNet {

  private _params: NetParams

  public async load(weightsOrUrl: Float32Array | string | undefined): Promise<void> {
    if (weightsOrUrl instanceof Float32Array) {
      this.extractWeights(weightsOrUrl)
      return
    }

    if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
      throw new Error('FaceLandmarkNet.load - expected model uri, or weights as Float32Array')
    }
    this._params = await loadQuantizedParams(weightsOrUrl)
  }

  public extractWeights(weights: Float32Array) {
    this._params = extractParams(weights)
  }

  public forwardInput(input: NetInput): tf.Tensor2D {
    if (!this._params) {
      throw new Error('FaceRecognitionNet - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(150, true)

      const normalized = normalize(batchTensor)

      let out = convDown(normalized, this._params.conv32_down)
      out = tf.maxPool(out, 3, 2, 'valid')

      out = residual(out, this._params.conv32_1)
      out = residual(out, this._params.conv32_2)
      out = residual(out, this._params.conv32_3)

      out = residualDown(out, this._params.conv64_down)
      out = residual(out, this._params.conv64_1)
      out = residual(out, this._params.conv64_2)
      out = residual(out, this._params.conv64_3)

      out = residualDown(out, this._params.conv128_down)
      out = residual(out, this._params.conv128_1)
      out = residual(out, this._params.conv128_2)

      out = residualDown(out, this._params.conv256_down)
      out = residual(out, this._params.conv256_1)
      out = residual(out, this._params.conv256_2)
      out = residualDown(out, this._params.conv256_down_out)

      const globalAvg = out.mean([1, 2]) as tf.Tensor2D
      const fullyConnected = tf.matMul(globalAvg, this._params.fc)

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
}