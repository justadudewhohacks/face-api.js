import * as tf from '@tensorflow/tfjs-core';

import { leaky } from './leaky';
import { ConvWithBatchNorm, SeparableConvParams } from './types';

export function convWithBatchNorm(x: tf.Tensor4D, params: ConvWithBatchNorm | SeparableConvParams): tf.Tensor4D  {
  return tf.tidy(() => {
    let out = tf.pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]) as tf.Tensor4D

    if (params instanceof SeparableConvParams) {
      out = tf.separableConv2d(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid')
      out = tf.add(out, params.bias)
    } else {
      out = tf.conv2d(out, params.conv.filters, [1, 1], 'valid')
      out = tf.sub(out, params.bn.sub)
      out = tf.mul(out, params.bn.truediv)
      out = tf.add(out, params.conv.bias)
    }

    return leaky(out)
  })
}