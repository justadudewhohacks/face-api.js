import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { sharedLayer } from './sharedLayers';
import { PNetParams } from './types';

export function PNet(x: tf.Tensor4D, params: PNetParams): { prob: tf.Tensor4D, regions: tf.Tensor4D } {
  return tf.tidy(() => {

    let out = sharedLayer(x, params, true)
    const conv = TfjsImageRecognitionBase.convLayer(out, params.conv4_1, 'valid')
    const max = tf.expandDims(tf.max(conv, 3), 3)
    const prob = tf.softmax(tf.sub(conv, max), 3) as tf.Tensor4D
    const regions = TfjsImageRecognitionBase.convLayer(out, params.conv4_2, 'valid')

    return { prob, regions }
  })
}