import * as tf from '@tensorflow/tfjs-core';

import { ConvParams } from './types';

export function convLayer(
  x: tf.Tensor4D,
  params: ConvParams,
  padding: 'valid' | 'same' = 'same'
): tf.Tensor4D {
  return tf.tidy(() =>
    tf.add(
      tf.conv2d(x, params.filters, [1, 1], padding),
      params.bias
    )
  )
}