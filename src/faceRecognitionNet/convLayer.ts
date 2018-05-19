import * as tf from '@tensorflow/tfjs-core';

import { scale, ScaleLayerParams } from './scaleLayer';

export type ConvParams = {
  filters: tf.Tensor4D
  biases: tf.Tensor1D
}

export type ConvLayerParams = {
  conv: ConvParams
  scale: ScaleLayerParams
}

function convLayer(
  x: tf.Tensor4D,
  params: ConvLayerParams,
  stride: number,
  withRelu: boolean,
  padding: 'valid' | 'same' = 'same'
): tf.Tensor4D {
  const { filters, biases } = params.conv

  let out = tf.conv2d(x, filters, [stride, stride], padding)
  out = tf.add(out, biases)
  out = scale(out, params.scale)
  return withRelu ? tf.relu(out) : out
}

export function conv(x: tf.Tensor4D, params: ConvLayerParams) {
  return convLayer(x, params, 1, true)
}

export function convNoRelu(x: tf.Tensor4D, params: ConvLayerParams) {
  return convLayer(x, params, 1, false)
}

export function convDown(x: tf.Tensor4D, params: ConvLayerParams) {
  return convLayer(x, params, 2, true, 'valid')
}