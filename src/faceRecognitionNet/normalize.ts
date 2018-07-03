import * as tf from '@tensorflow/tfjs-core';

export function normalize(x: tf.Tensor4D): tf.Tensor4D {
  return tf.tidy(() => {
    const avg_r = tf.fill([...x.shape.slice(0, 3), 1], 122.782);
    const avg_g = tf.fill([...x.shape.slice(0, 3), 1], 117.001);
    const avg_b = tf.fill([...x.shape.slice(0, 3), 1], 104.298);
    const avg_rgb = tf.concat([avg_r, avg_g, avg_b], 3)

    return tf.div(tf.sub(x, avg_rgb), tf.scalar(256))
  })
}