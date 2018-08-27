import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from 'tfjs-tiny-yolov2';

import { prelu } from './prelu';
import { SharedParams } from './types';

export function sharedLayer(x: tf.Tensor4D, params: SharedParams, isPnet: boolean = false) {
  return tf.tidy(() => {

    let out = convLayer(x, params.conv1, 'valid')
    out = prelu<tf.Tensor4D>(out, params.prelu1_alpha)
    out = tf.maxPool(out, isPnet ? [2, 2]: [3, 3], [2, 2], 'same')
    out = convLayer(out, params.conv2, 'valid')
    out = prelu<tf.Tensor4D>(out, params.prelu2_alpha)
    out = isPnet ? out : tf.maxPool(out, [3, 3], [2, 2], 'valid')
    out = convLayer(out, params.conv3, 'valid')
    out = prelu<tf.Tensor4D>(out, params.prelu3_alpha)

    return out
  })
}