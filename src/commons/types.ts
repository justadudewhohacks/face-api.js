import * as tf from '@tensorflow/tfjs-core';

export type ConvParams = {
  filters: tf.Tensor4D
  bias: tf.Tensor1D
}

export type FCParams = {
  weights: tf.Tensor2D
  bias: tf.Tensor1D
}