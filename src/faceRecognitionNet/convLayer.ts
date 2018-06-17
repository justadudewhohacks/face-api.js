import * as tf from '@tensorflow/tfjs-core';

import { scale } from './scaleLayer';
import { FaceRecognitionNet } from './types';


function convLayer(
  x: tf.Tensor4D,
  params: FaceRecognitionNet.ConvLayerParams,
  strides: [number, number],
  withRelu: boolean,
  padding: 'valid' | 'same' = 'same'
): tf.Tensor4D {
  const { filters, bias } = params.conv

  let out = tf.conv2d(x, filters, strides, padding)
  out = tf.add(out, bias)
  out = scale(out, params.scale)
  return withRelu ? tf.relu(out) : out
}

export function conv(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams) {
  return convLayer(x, params, [1, 1], true)
}

export function convNoRelu(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams) {
  return convLayer(x, params, [1, 1], false)
}

export function convDown(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams) {
  return convLayer(x, params, [2, 2], true, 'valid')
}