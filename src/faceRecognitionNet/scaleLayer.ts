import * as tf from '@tensorflow/tfjs-core';
import { FaceRecognitionNet } from './types';

export function scale(x: tf.Tensor4D, params: FaceRecognitionNet.ScaleLayerParams): tf.Tensor4D {
  return tf.add(tf.mul(x, params.weights), params.biases)
}
