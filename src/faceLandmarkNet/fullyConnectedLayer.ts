import * as tf from '@tensorflow/tfjs-core';

import { FaceLandmarkNet } from './types';

export function fullyConnectedLayer(
  x: tf.Tensor2D,
  params: FaceLandmarkNet.FCParams
): tf.Tensor2D {
  return tf.tidy(() =>
    tf.add(
      tf.matMul(x, params.weights),
      params.bias
    )
  )
}