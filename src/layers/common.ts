import * as tf from '@tensorflow/tfjs-core';

import { isTensor } from '../utils';

export function extractWeightTensor4D(weightMap: tf.NamedTensorMap, name: string): tf.Tensor4D {
  return extractWeightTensor<tf.Rank.R4>(weightMap, name, 4)
}

export function extractWeightTensor1D(weightMap: tf.NamedTensorMap, name: string): tf.Tensor1D {
  return extractWeightTensor<tf.Rank.R1>(weightMap, name, 1)
}

export function extractWeightTensor<R extends tf.Rank>(weightMap: tf.NamedTensorMap, name: string, paramRank: number): tf.Tensor<R> {
  const tensor = weightMap[name]
  if (!isTensor<R>(tensor, paramRank)) {
    throw new Error(`expected weightMap[${name}] to be a Tensor${paramRank}D, instead have ${tensor}`)
  }

  return tensor
}
