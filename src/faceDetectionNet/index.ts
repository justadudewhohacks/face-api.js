import * as tf from '@tensorflow/tfjs-core';

import { resizeLayer } from './resizeLayer';
import { extractParams } from './extractParams';
import { mobileNetV1 } from './mobileNetV1';

export function faceDetectionNet(weights: Float32Array) {
  const params = extractParams(weights)

  async function forward(input: ImageData|ImageData[]) {

    const imgTensors = (input instanceof ImageData ? [input] : input)
      .map(data => tf.fromPixels(data))
      .map(data => tf.expandDims(data, 0)) as tf.Tensor4D[]

    const imgTensor = tf.cast(tf.concat(imgTensors, 0), 'float32')

    let out = resizeLayer(imgTensor) as tf.Tensor4D

    out = mobileNetV1(out, params.mobilenetv1_params)

    return out
  }

  return {
    forward
  }
}