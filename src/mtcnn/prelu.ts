import * as tf from '@tensorflow/tfjs-core';

export function prelu(x: tf.Tensor4D, alpha: tf.Tensor1D): tf.Tensor4D {
  return tf.tidy(() =>
    tf.add(
      tf.relu(x),
      tf.mul(alpha, tf.neg(tf.relu(tf.neg(x))))
    )
  )
}
