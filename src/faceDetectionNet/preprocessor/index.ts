import * as tf from '@tensorflow/tfjs-core';
import { TensorArray } from '../../tfcpatches/TensorArray';
import { whileLayer } from './whileLayer';

export type PreprocessorParams = any

// TODO: hardcoded params
const elementShape = [512, 512, 3]
const weight = tf.scalar(0.007843137718737125)
const bias = tf.scalar(1)

export function preprocessor(imgTensor: tf.Tensor4D, params: PreprocessorParams) {
  const batchSize = imgTensor.shape[0]
  const batchSizedArray1 = new TensorArray(batchSize, 'float32')
  const batchSizedArray2 = new TensorArray(batchSize, 'float32')

  let unusedFlow = null
  const indices = tf.range(0, batchSize, 1)

  // unstack
  unusedFlow = batchSizedArray1.scatter(indices, imgTensor, unusedFlow)

  unusedFlow = whileLayer(batchSizedArray1, batchSizedArray2, batchSize, unusedFlow)

  // stack
  const stacked = batchSizedArray2.gather(indices, unusedFlow, 'float32', elementShape)

  return tf.add(tf.mul(stacked, weight), bias)
}