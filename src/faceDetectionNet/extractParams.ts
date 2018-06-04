import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet } from './types';

function mobilenetV1WeightsExtractorsFactory(extractWeights: (numWeights: number) => Float32Array) {

  function extractDepthwiseConvParams(numChannels: number): FaceDetectionNet.MobileNetV1.DepthwiseConvParams {
    const filters = tf.tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1])
    const batch_norm_scale = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_offset = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_mean = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_variance = tf.tensor1d(extractWeights(numChannels))

    return {
      filters,
      batch_norm_scale,
      batch_norm_offset,
      batch_norm_mean,
      batch_norm_variance
    }
  }

  function extractPointwiseConvParams(channelsIn: number, channelsOut: number): FaceDetectionNet.MobileNetV1.PointwiseConvParams {
    const filters = tf.tensor4d(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut])
    const batch_norm_offset = tf.tensor1d(extractWeights(channelsOut))

    return {
      filters,
      batch_norm_offset
    }
  }

  function extractConvPairParams(channelsIn: number, channelsOut: number): FaceDetectionNet.MobileNetV1.ConvPairParams {
    const depthwise_conv_params = extractDepthwiseConvParams(channelsIn)
    const pointwise_conv_params = extractPointwiseConvParams(channelsIn, channelsOut)

    return {
      depthwise_conv_params,
      pointwise_conv_params
    }
  }

  return {
    extractPointwiseConvParams,
    extractConvPairParams
  }

}

function extractorsFactory(extractWeights: (numWeights: number) => Float32Array) {

  const {
    extractPointwiseConvParams,
    extractConvPairParams
  } = mobilenetV1WeightsExtractorsFactory(extractWeights)



  function extractMobilenetV1Params(): FaceDetectionNet.MobileNetV1.Params {

    const conv_0_params = {
      filters: tf.tensor4d(extractWeights(3 * 3 * 3 * 32), [3, 3, 3, 32]),
      batch_norm_offset: tf.tensor1d(extractWeights(32))

    }

    const channelNumPairs = [
      [32, 64],
      [64, 128],
      [128, 128],
      [128, 256],
      [256, 256],
      [256, 512],
      [512, 512],
      [512, 512],
      [512, 512],
      [512, 512],
      [512, 512],
      [512, 1024],
      [1024, 1024]
    ]

    const conv_pair_params = channelNumPairs.map(
      ([channelsIn, channelsOut]) => extractConvPairParams(channelsIn, channelsOut)
    )

    return {
      conv_0_params,
      conv_pair_params
    }

  }


  return {
    extractMobilenetV1Params
  }

}

export function extractParams(weights: Float32Array): FaceDetectionNet.NetParams {
  const extractWeights = (numWeights: number): Float32Array => {
    console.log(numWeights)
    const ret = weights.slice(0, numWeights)
    weights = weights.slice(numWeights)
    return ret
  }

  const {
    extractMobilenetV1Params
  } = extractorsFactory(extractWeights)

  const mobilenetv1_params = extractMobilenetV1Params()

  if (weights.length !== 0) {
    throw new Error(`weights remaing after extract: ${weights.length}`)
  }

  return {
    mobilenetv1_params
  }
}