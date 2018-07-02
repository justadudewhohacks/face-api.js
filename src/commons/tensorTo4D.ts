import * as tf from '@tensorflow/tfjs-core';

export function tensorTo4D(input: tf.Tensor): tf.Tensor4D {
  if (input.rank !== 3 && input.rank !== 4) {
    throw new Error('tensorTo4D - input tensor must be of rank 3 or 4')
  }
  return tf.tidy(
    () => input.rank === 3 ? input.expandDims(0) : input
  ) as tf.Tensor4D
}