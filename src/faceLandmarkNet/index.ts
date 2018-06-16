import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from '../getImageTensor';
import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
import { TNetInput } from '../types';
import { extractParams } from './extractParams';
import { convLayer } from '../commons/convLayer';
import { fullyConnectedLayer } from './fullyConnectedLayer';

export function faceLandmarkNet(weights: Float32Array) {
  const params = extractParams(weights)

  function forward(input: tf.Tensor | NetInput | TNetInput) {
    return tf.tidy(() => {

      let x = padToSquare(getImageTensor(input), true)
      // work with 128 x 128 sized face images
      if (x.shape[1] !== 128 || x.shape[2] !== 128) {
        x = tf.image.resizeBilinear(x, [128, 128])
      }

      let out = convLayer(x, params.conv0_params, 'valid')
      out = tf.maxPool(out, [2, 2], [2, 2], 'valid')
      out = convLayer(out, params.conv1_params, 'valid')
      out = convLayer(out, params.conv2_params, 'valid')
      out = tf.maxPool(out, [2, 2], [2, 2], 'valid')
      out = convLayer(out, params.conv3_params, 'valid')
      out = convLayer(out, params.conv4_params, 'valid')
      out = tf.maxPool(out, [2, 2], [2, 2], 'valid')
      out = convLayer(out, params.conv5_params, 'valid')
      out = convLayer(out, params.conv6_params, 'valid')
      out = tf.maxPool(out, [2, 2], [1, 1], 'valid')
      out = convLayer(out, params.conv7_params, 'valid')
      const fc0 = fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0_params)
      const fc1 = fullyConnectedLayer(fc0, params.fc1_params)

      return fc1
    })
  }

  return {
    forward
  }
}