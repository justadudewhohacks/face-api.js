import * as tf from '@tensorflow/tfjs-core';

import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import { prelu } from './prelu';
import { sharedLayer } from './sharedLayers';
import { RNetParams } from './types';

export function RNet(x: tf.Tensor4D, params: RNetParams): { scores: tf.Tensor1D, regions: tf.Tensor2D } {
  return tf.tidy(() => {

    const convOut = sharedLayer(x, params)
    const vectorized = tf.reshape(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]) as tf.Tensor2D
    const fc1 = fullyConnectedLayer(vectorized, params.fc1)
    const prelu4 = prelu<tf.Tensor2D>(fc1, params.prelu4_alpha)
    const fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1)
    const max = tf.expandDims(tf.max(fc2_1, 1), 1)
    const prob = tf.softmax(tf.sub(fc2_1, max), 1) as tf.Tensor2D
    const regions = fullyConnectedLayer(prelu4, params.fc2_2)

    const scores = tf.unstack(prob, 1)[1] as tf.Tensor1D
    return { scores, regions }
  })
}