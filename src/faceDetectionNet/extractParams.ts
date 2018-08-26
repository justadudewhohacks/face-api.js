import * as tf from '@tensorflow/tfjs-core';
import { extractWeightsFactory, ExtractWeightsFunction, ParamMapping } from 'tfjs-image-recognition-base';

import { ConvParams } from '../commons/types';
import { MobileNetV1, NetParams, PointwiseConvParams, PredictionLayerParams } from './types';

function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]) {

  function extractDepthwiseConvParams(numChannels: number, mappedPrefix: string): MobileNetV1.DepthwiseConvParams {

    const filters = tf.tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1])
    const batch_norm_scale = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_offset = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_mean = tf.tensor1d(extractWeights(numChannels))
    const batch_norm_variance = tf.tensor1d(extractWeights(numChannels))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/filters` },
      { paramPath: `${mappedPrefix}/batch_norm_scale` },
      { paramPath: `${mappedPrefix}/batch_norm_offset` },
      { paramPath: `${mappedPrefix}/batch_norm_mean` },
      { paramPath: `${mappedPrefix}/batch_norm_variance` }
    )

    return {
      filters,
      batch_norm_scale,
      batch_norm_offset,
      batch_norm_mean,
      batch_norm_variance
    }
  }

  function extractConvParams(
    channelsIn: number,
    channelsOut: number,
    filterSize: number,
    mappedPrefix: string,
    isPointwiseConv?: boolean
  ): ConvParams {

    const filters = tf.tensor4d(
      extractWeights(channelsIn * channelsOut * filterSize * filterSize),
      [filterSize, filterSize, channelsIn, channelsOut]
    )
    const bias = tf.tensor1d(extractWeights(channelsOut))

    paramMappings.push(
      { paramPath: `${mappedPrefix}/filters` },
      { paramPath: `${mappedPrefix}/${isPointwiseConv ? 'batch_norm_offset' : 'bias'}` }
    )

    return { filters, bias }
  }

  function extractPointwiseConvParams(
    channelsIn: number,
    channelsOut: number,
    filterSize: number,
    mappedPrefix: string
  ): PointwiseConvParams {

    const {
      filters,
      bias
    } = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true)

    return {
      filters,
      batch_norm_offset: bias
    }
  }

  function extractConvPairParams(
    channelsIn: number,
    channelsOut: number,
    mappedPrefix: string
  ): MobileNetV1.ConvPairParams {

    const depthwise_conv = extractDepthwiseConvParams(channelsIn, `${mappedPrefix}/depthwise_conv`)
    const pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, `${mappedPrefix}/pointwise_conv`)

    return { depthwise_conv, pointwise_conv }
  }

  function extractMobilenetV1Params(): MobileNetV1.Params {

    const conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0')

    const conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1')
    const conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2')
    const conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3')
    const conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4')
    const conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5')
    const conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6')
    const conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7')
    const conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8')
    const conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9')
    const conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10')
    const conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11')
    const conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12')
    const conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13')

    return {
      conv_0,
      conv_1,
      conv_2,
      conv_3,
      conv_4,
      conv_5,
      conv_6,
      conv_7,
      conv_8,
      conv_9,
      conv_10,
      conv_11,
      conv_12,
      conv_13
    }
  }

  function extractPredictionLayerParams(): PredictionLayerParams {
    const conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0')
    const conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1')
    const conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2')
    const conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3')
    const conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4')
    const conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5')
    const conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6')
    const conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7')

    const box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor')
    const class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor')
    const box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor')
    const class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor')
    const box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor')
    const class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor')
    const box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor')
    const class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor')
    const box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor')
    const class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor')
    const box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor')
    const class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor')

    const box_predictor_0 = {
      box_encoding_predictor: box_encoding_0_predictor,
      class_predictor: class_predictor_0
    }
    const box_predictor_1 = {
      box_encoding_predictor: box_encoding_1_predictor,
      class_predictor: class_predictor_1
    }
    const box_predictor_2 = {
      box_encoding_predictor: box_encoding_2_predictor,
      class_predictor: class_predictor_2
    }
    const box_predictor_3 = {
      box_encoding_predictor: box_encoding_3_predictor,
      class_predictor: class_predictor_3
    }
    const box_predictor_4 = {
      box_encoding_predictor: box_encoding_4_predictor,
      class_predictor: class_predictor_4
    }
    const box_predictor_5 = {
      box_encoding_predictor: box_encoding_5_predictor,
      class_predictor: class_predictor_5
    }

    return {
      conv_0,
      conv_1,
      conv_2,
      conv_3,
      conv_4,
      conv_5,
      conv_6,
      conv_7,
      box_predictor_0,
      box_predictor_1,
      box_predictor_2,
      box_predictor_3,
      box_predictor_4,
      box_predictor_5
    }
  }

  return {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  }

}

export function extractParams(weights: Float32Array): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractWeights,
    getRemainingWeights
  } = extractWeightsFactory(weights)

  const {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  } = extractorsFactory(extractWeights, paramMappings)

  const mobilenetv1 = extractMobilenetV1Params()
  const prediction_layer = extractPredictionLayerParams()
  const extra_dim = tf.tensor3d(
    extractWeights(5118 * 4),
    [1, 5118, 4]
  )
  const output_layer = {
    extra_dim
  }

  paramMappings.push({ paramPath: 'output_layer/extra_dim' })

  if (getRemainingWeights().length !== 0) {
    throw new Error(`weights remaing after extract: ${getRemainingWeights().length}`)
  }

  return {
    params: {
      mobilenetv1,
      prediction_layer,
      output_layer
    },
    paramMappings
  }
}