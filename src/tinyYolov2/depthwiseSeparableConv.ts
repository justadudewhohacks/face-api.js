import * as tf from '@tensorflow/tfjs-core';

import { SeparableConvParams } from '../common/types';
import { leaky } from './leaky';

export function depthwiseSeparableConv(x: tf.Tensor4D, params: SeparableConvParams): tf.Tensor4D  {
  return tf.tidy(() => {
    let out = tf.pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]) as tf.Tensor4D

    out = tf.separableConv2d(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid')
    out = tf.add(out, params.bias)

    return leaky(out)
  })
}