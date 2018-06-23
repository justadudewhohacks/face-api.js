import * as tf from '@tensorflow/tfjs-core';

export function isTensor(tensor: tf.Tensor, dim: number) {
  return tensor instanceof tf.Tensor && tensor.shape.length === dim
}

export function isTensor1D(tensor: tf.Tensor) {
  return isTensor(tensor, 1)
}

export function isTensor2D(tensor: tf.Tensor) {
  return isTensor(tensor, 2)
}

export function isTensor3D(tensor: tf.Tensor) {
  return isTensor(tensor, 3)
}

export function isTensor4D(tensor: tf.Tensor) {
  return isTensor(tensor, 4)
}