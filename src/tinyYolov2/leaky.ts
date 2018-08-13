import * as tf from '@tensorflow/tfjs-core';

export function leaky(x: tf.Tensor4D): tf.Tensor4D {
  return tf.tidy(() => {
    const min = tf.mul(x, tf.scalar(0.10000000149011612))
    return tf.add(tf.relu(tf.sub(x, min)), min)
    //return tf.maximum(x, min)
  })
}