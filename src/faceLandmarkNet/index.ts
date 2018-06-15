import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from '../getImageTensor';
import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
import { TNetInput } from '../types';
import { extractParams } from './extractParams';

export function faceLandmarkNet(weights: Float32Array) {
  const params = extractParams(weights)

  function forward(input: tf.Tensor | NetInput | TNetInput) {
    return tf.tidy(() => {

      let x = padToSquare(getImageTensor(input), true)
      // work with 128 x 128 sized face images
      if (x.shape[1] !== 128 || x.shape[2] !== 128) {
        x = tf.image.resizeBilinear(x, [128, 128])
      }

      // pool 1
      tf.maxPool(x, [2, 2], [2, 2], 'valid')
      // pool 2
      tf.maxPool(x, [2, 2], [2, 2], 'valid')
      // pool 3
      tf.maxPool(x, [2, 2], [2, 2], 'valid')
      // pool 4
      tf.maxPool(x, [2, 2], [1, 1], 'valid')
      // TODO

      return x
    })
  }

  return {
    forward
  }
}