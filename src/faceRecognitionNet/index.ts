import * as tf from '@tensorflow/tfjs-core';

import { normalize } from '../normalize';
import { convDown } from './convLayer';
import { extractParams } from './extractParams';
import { residual, residualDown } from './residualLayer';

export function faceRecognitionNet(weights: Float32Array) {
  const params = extractParams(weights)

  function forward(input: number[] | ImageData) {

    return tf.tidy(() => {

      const x = normalize(input)

      let out = convDown(x, params.conv32_down)
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

  const computeFaceDescriptor = (input: number[] | ImageData) => forward(input).data()
  const computeFaceDescriptorSync = (input: number[] | ImageData) => forward(input).dataSync()

  return {
    computeFaceDescriptor,
    computeFaceDescriptorSync,
    forward
  }
}