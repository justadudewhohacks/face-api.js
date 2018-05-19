import * as tf from '@tensorflow/tfjs-core';

export type ScaleLayerParams = {
  weights: tf.Tensor1D
  biases: tf.Tensor1D
}

export function scale(x: tf.Tensor4D, params: ScaleLayerParams): tf.Tensor4D {
  return tf.add(tf.mul(x, params.weights), params.biases)
}