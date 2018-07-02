import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../NetInput';
import { tensorTo4D } from './tensorTo4D';

export function getImageTensor(input: tf.Tensor | NetInput): tf.Tensor4D {
  return tf.tidy(() => {
    if (input instanceof tf.Tensor) {
      return tensorTo4D(input)
    }

    if (!(input instanceof NetInput)) {
      throw new Error('getImageTensor - expected input to be a tensor or an instance of NetInput')
    }

    if (input.canvases.length > 1) {
      throw new Error('getImageTensor - batch input is not accepted here')
    }

    return tf.fromPixels(input.canvases[0]).expandDims(0).toFloat() as tf.Tensor4D
  })
}