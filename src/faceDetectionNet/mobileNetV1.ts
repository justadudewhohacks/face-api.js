import * as tf from '@tensorflow/tfjs-core';

import { pointwiseConvLayer } from './pointwiseConvLayer';
import { FaceDetectionNet } from './types';

const epsilon = 0.0010000000474974513

function depthwiseConvLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.MobileNetV1.DepthwiseConvParams,
  strides: [number, number]
) {
  return tf.tidy(() => {

    let out = tf.depthwiseConv2d(x, params.filters, strides, 'same')
    out = tf.batchNormalization<tf.Rank.R4>(
      out,
      params.batch_norm_mean,
      params.batch_norm_variance,
      epsilon,
      params.batch_norm_scale,
      params.batch_norm_offset
    )
    return tf.clipByValue(out, 0, 6)

  })
}

function getStridesForLayerIdx(layerIdx: number): [number, number] {
  return [2, 4, 6, 12].some(idx => idx === layerIdx) ? [2, 2] : [1, 1]
}

export function mobileNetV1(x: tf.Tensor4D, params: FaceDetectionNet.MobileNetV1.Params) {
  return tf.tidy(() => {

    let conv11 = null
    let out = pointwiseConvLayer(x, params.conv_0_params, [2, 2])

    params.conv_pair_params.forEach((param, i) => {
      const layerIdx = i + 1
      const depthwiseConvStrides = getStridesForLayerIdx(layerIdx)
      out = depthwiseConvLayer(out, param.depthwise_conv_params, depthwiseConvStrides)
      out = pointwiseConvLayer(out, param.pointwise_conv_params, [1, 1])
      if (layerIdx === 11) {
        conv11 = out
      }
    })

    if (conv11 === null) {
      throw new Error('mobileNetV1 - output of conv layer 11 is null')
    }

    return {
      out,
      conv11: conv11 as any
    }

  })
}