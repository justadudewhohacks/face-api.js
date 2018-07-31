import * as tf from '@tensorflow/tfjs-core';

export function leaky(x: tf.Tensor4D): tf.Tensor4D {
  return tf.tidy(() => {
    return tf.maximum(x, tf.mul(x, tf.scalar(0.10000000149011612)))
  })
}