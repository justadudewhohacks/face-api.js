import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import { prelu } from './prelu';
import { sharedLayer } from './sharedLayers';
import { ONetParams } from './types';

export function ONet(x: tf.Tensor4D, params: ONetParams): { scores: tf.Tensor1D, regions: tf.Tensor2D, points: tf.Tensor2D } {
  return tf.tidy(() => {

    let out = sharedLayer(x, params)
    out = tf.maxPool(out, [2, 2], [2, 2], 'same')
    out = TfjsImageRecognitionBase.convLayer(out, params.conv4, 'valid')
    out = prelu<tf.Tensor4D>(out, params.prelu4_alpha)

    const vectorized = tf.reshape(out, [out.shape[0], params.fc1.weights.shape[0]]) as tf.Tensor2D
    const fc1 = fullyConnectedLayer(vectorized, params.fc1)
    const prelu5 = prelu<tf.Tensor2D>(fc1, params.prelu5_alpha)
    const fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1)
    const max = tf.expandDims(tf.max(fc2_1, 1), 1)

    const prob = tf.softmax(tf.sub(fc2_1, max), 1) as tf.Tensor2D
    const regions = fullyConnectedLayer(prelu5, params.fc2_2)
    const points = fullyConnectedLayer(prelu5, params.fc2_3)

    const scores = tf.unstack(prob, 1)[1] as tf.Tensor1D
    return { scores, regions, points }
  })
}