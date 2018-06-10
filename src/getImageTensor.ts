import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from './NetInput';
import { TNetInput } from './types';

export function getImageTensor(input: tf.Tensor | NetInput | TNetInput): tf.Tensor4D {
  return tf.tidy(() => {
    if (input instanceof tf.Tensor) {
      const rank = input.shape.length
      if (rank !== 3 && rank !== 4) {
        throw new Error('input tensor must be of rank 3 or 4')
      }

      return (rank === 3 ? input.expandDims(0) : input).toFloat() as tf.Tensor4D
    }

    const netInput = input instanceof NetInput ? input : new NetInput(input)
    return tf.concat(
      netInput.canvases.map(canvas =>
        tf.fromPixels(canvas).expandDims(0).toFloat()
      )
    ) as tf.Tensor4D
  })
}