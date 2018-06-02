import * as tf from '@tensorflow/tfjs-core';
import { TensorArray } from '../../tfcpatches/TensorArray';

export function whileLayer(arr1: TensorArray, arr2: TensorArray, batchSize: number, unusedFlowIn: tf.Scalar): tf.Scalar {
  // TODO

  const unusedFlowOut = tf.scalar(0)
  return unusedFlowOut
}