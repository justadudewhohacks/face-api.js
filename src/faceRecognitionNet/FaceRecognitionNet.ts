import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from '../getImageTensor';
import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
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

  public forward(input: tf.Tensor | NetInput | TNetInput) {
    if (!this._params) {
      throw new Error('FaceRecognitionNet - load model before inference')
    }

    return tf.tidy(() => {

      let x = padToSquare(getImageTensor(input), true)
      // work with 150 x 150 sized face images
      if (x.shape[1] !== 150 || x.shape[2] !== 150) {
        x = tf.image.resizeBilinear(x, [150, 150])
      }
      x = normalize(x)

      let out = convDown(x, this._params.conv32_down)
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

  public async computeFaceDescriptor(input: tf.Tensor | NetInput | TNetInput) {
    const result = this.forward(input)
    const data = await result.data()
    result.dispose()
    return data as Float32Array
  }

  public async computeFaceDescriptorSync(input: tf.Tensor | NetInput | TNetInput) {
    const result = this.forward(input)
    const data = result.dataSync()
    result.dispose()
    return data as Float32Array
  }
}