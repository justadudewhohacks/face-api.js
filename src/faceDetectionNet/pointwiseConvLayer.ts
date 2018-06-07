import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet } from './types';

export function pointwiseConvLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.PointwiseConvParams,
  strides: [number, number]
) {
  return tf.tidy(() => {

    let out = tf.conv2d(x, params.filters, strides, 'same')
    out = tf.add(out, params.batch_norm_offset)
    return tf.clipByValue(out, 0, 6)

  })
}