import * as tf from '@tensorflow/tfjs-core';

import { resizeLayer } from './resizeLayer';

export function faceDetectionNet() {

  async function forward(input: ImageData|ImageData[]) {

    const imgTensors = (input instanceof ImageData ? [input] : input)
      .map(data => tf.fromPixels(data))
      .map(data => tf.expandDims(data, 0)) as tf.Tensor4D[]

    const imgTensor = tf.cast(tf.concat(imgTensors, 0), 'float32')

    const resized = resizeLayer(imgTensor)




    return resized
  }

  return {
    forward
  }
}