import * as tf from '@tensorflow/tfjs-core';

export function isTensor(tensor: any, dim: number) {
  return tensor instanceof tf.Tensor && tensor.shape.length === dim
}

export function isTensor1D(tensor: any) {
  return isTensor(tensor, 1)
}

export function isTensor2D(tensor: any) {
  return isTensor(tensor, 2)
}

export function isTensor3D(tensor: any) {
  return isTensor(tensor, 3)
}

export function isTensor4D(tensor: any) {
  return isTensor(tensor, 4)
}