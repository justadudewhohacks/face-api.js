import * as tf from '@tensorflow/tfjs-core';

import { pointwiseConvLayer } from './pointwiseConvLayer';
import { MobileNetV1 } from './types';

const epsilon = 0.0010000000474974513

function depthwiseConvLayer(
  x: tf.Tensor4D,
  params: MobileNetV1.DepthwiseConvParams,
  strides: [number, number]
) {
  return tf.tidy(() => {

    let out = tf.depthwiseConv2d(x, params.filters, strides, 'same')
    out = tf.batchNorm<tf.Rank.R4>(
      out,
      params.batch_norm_mean,
      params.batch_norm_variance,
      params.batch_norm_offset,
      params.batch_norm_scale,
      epsilon
    )
    return tf.clipByValue(out, 0, 6)

  })
}

function getStridesForLayerIdx(layerIdx: number): [number, number] {
  return [2, 4, 6, 12].some(idx => idx === layerIdx) ? [2, 2] : [1, 1]
}

export function mobileNetV1(x: tf.Tensor4D, params: MobileNetV1.Params) {
  return tf.tidy(() => {

    let conv11 = null
    let out = pointwiseConvLayer(x, params.conv_0, [2, 2])

    const convPairParams = [
      params.conv_1,
      params.conv_2,
      params.conv_3,
      params.conv_4,
      params.conv_5,
      params.conv_6,
      params.conv_7,
      params.conv_8,
      params.conv_9,
      params.conv_10,
      params.conv_11,
      params.conv_12,
      params.conv_13
    ]

    convPairParams.forEach((param, i) => {
      const layerIdx = i + 1
      const depthwiseConvStrides = getStridesForLayerIdx(layerIdx)
      out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides)
      out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1])
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