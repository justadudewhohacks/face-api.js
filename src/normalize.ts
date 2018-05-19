import * as tf from '@tensorflow/tfjs-core';

export function normalize(input: number[]): tf.Tensor4D {
  return tf.tidy(() => {
    const avg_r = tf.fill([1, 150, 150, 1], 122.782);
    const avg_g = tf.fill([1, 150, 150, 1], 117.001);
    const avg_b = tf.fill([1, 150, 150, 1], 104.298);
    const avg_rgb = tf.concat([avg_r, avg_g, avg_b], 3)

    const x = tf.tensor4d(input, [1, 150, 150, 3])
    return tf.div(tf.sub(x, avg_rgb), tf.fill(x.shape, 256))
  })
}