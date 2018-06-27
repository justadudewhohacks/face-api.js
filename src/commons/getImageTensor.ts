import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../NetInput';

export function getImageTensor(input: tf.Tensor | NetInput): tf.Tensor4D {
  return tf.tidy(() => {
    if (input instanceof tf.Tensor) {
      const rank = input.shape.length
      if (rank !== 3 && rank !== 4) {
        throw new Error('input tensor must be of rank 3 or 4')
      }

      return (rank === 3 ? input.expandDims(0) : input).toFloat() as tf.Tensor4D
    }

    if (!(input instanceof NetInput)) {
      throw new Error('getImageTensor - expected input to be a tensor or an instance of NetInput')
    }

    return tf.concat(
      input.canvases.map(canvas =>
        tf.fromPixels(canvas).expandDims(0).toFloat()
      )
    ) as tf.Tensor4D
  })
}