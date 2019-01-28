import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

export function fullyConnectedLayer(
  x: tf.Tensor2D,
  params: TfjsImageRecognitionBase.FCParams
): tf.Tensor2D {
  return tf.tidy(() =>
    tf.add(
      tf.matMul(x, params.weights),
      params.bias
    )
  )
}