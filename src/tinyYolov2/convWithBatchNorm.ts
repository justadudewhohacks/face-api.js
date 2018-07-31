import * as tf from '@tensorflow/tfjs-core';

import { leaky } from './leaky';
import { ConvWithBatchNorm } from './types';

export function convWithBatchNorm(x: tf.Tensor4D, params: ConvWithBatchNorm): tf.Tensor4D  {
  return tf.tidy(() => {
    let out = tf.pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]) as tf.Tensor4D
    out = tf.conv2d(out, params.conv.filters, [1, 1], 'valid')
    out = tf.sub(out, params.bn.sub)
    out = tf.mul(out, params.bn.truediv)
    out = tf.add(out, params.conv.bias)
    return leaky(out)
  })
}