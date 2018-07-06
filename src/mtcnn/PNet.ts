import * as tf from '@tensorflow/tfjs-core';

import { convLayer } from '../commons/convLayer';
import { sharedLayer } from './sharedLayers';
import { PNetParams } from './types';

export function PNet(x: tf.Tensor4D, params: PNetParams): { prob: tf.Tensor3D, convOut: tf.Tensor4D } {
  return tf.tidy(() => {

    let out = sharedLayer(x, params)
    const conv = convLayer(out, params.conv4_1, 'valid')
    // TODO: tf.reduce_max <=> tf.max ?
    const logits = tf.sub(conv, tf.max(conv, 3))
    const prob = tf.softmax(logits, 3) as tf.Tensor3D
    const convOut = convLayer(out, params.conv4_2, 'valid')

    return { prob, convOut }
  })
}