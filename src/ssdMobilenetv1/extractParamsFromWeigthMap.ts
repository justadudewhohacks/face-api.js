import * as tf from '@tensorflow/tfjs-core';

import { ConvParams, disposeUnusedWeightTensors, extractWeightEntryFactory, ParamMapping } from '../common';
import { isTensor3D } from '../utils';
import { BoxPredictionParams, MobileNetV1, NetParams, PointwiseConvParams, PredictionLayerParams } from './types';

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  function extractPointwiseConvParams(prefix: string, idx: number, mappedPrefix: string): PointwiseConvParams {

    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/Conv2d_${idx}_pointwise/weights`, 4, `${mappedPrefix}/filters`)
    const batch_norm_offset = extractWeightEntry<tf.Tensor1D>(`${prefix}/Conv2d_${idx}_pointwise/convolution_bn_offset`, 1, `${mappedPrefix}/batch_norm_offset`)

    return { filters, batch_norm_offset }
  }

  function extractConvPairParams(idx: number): MobileNetV1.ConvPairParams {

    const mappedPrefix = `mobilenetv1/conv_${idx}`
    const prefixDepthwiseConv = `MobilenetV1/Conv2d_${idx}_depthwise`
    const mappedPrefixDepthwiseConv = `${mappedPrefix}/depthwise_conv`
    const mappedPrefixPointwiseConv = `${mappedPrefix}/pointwise_conv`

    const filters = extractWeightEntry<tf.Tensor4D>(`${prefixDepthwiseConv}/depthwise_weights`, 4, `${mappedPrefixDepthwiseConv}/filters`)
    const batch_norm_scale = extractWeightEntry<tf.Tensor1D>(`${prefixDepthwiseConv}/BatchNorm/gamma`, 1, `${mappedPrefixDepthwiseConv}/batch_norm_scale`)
    const batch_norm_offset = extractWeightEntry<tf.Tensor1D>(`${prefixDepthwiseConv}/BatchNorm/beta`, 1, `${mappedPrefixDepthwiseConv}/batch_norm_offset`)
    const batch_norm_mean = extractWeightEntry<tf.Tensor1D>(`${prefixDepthwiseConv}/BatchNorm/moving_mean`, 1, `${mappedPrefixDepthwiseConv}/batch_norm_mean`)
    const batch_norm_variance = extractWeightEntry<tf.Tensor1D>(`${prefixDepthwiseConv}/BatchNorm/moving_variance`, 1, `${mappedPrefixDepthwiseConv}/batch_norm_variance`)

    return {
      depthwise_conv: {
        filters,
        batch_norm_scale,
        batch_norm_offset,
        batch_norm_mean,
        batch_norm_variance
      },
      pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
    }
  }

  function extractMobilenetV1Params(): MobileNetV1.Params {
    return {
      conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
      conv_1: extractConvPairParams(1),
      conv_2: extractConvPairParams(2),
      conv_3: extractConvPairParams(3),
      conv_4: extractConvPairParams(4),
      conv_5: extractConvPairParams(5),
      conv_6: extractConvPairParams(6),
      conv_7: extractConvPairParams(7),
      conv_8: extractConvPairParams(8),
      conv_9: extractConvPairParams(9),
      conv_10: extractConvPairParams(10),
      conv_11: extractConvPairParams(11),
      conv_12: extractConvPairParams(12),
      conv_13: extractConvPairParams(13)
    }
  }

  function extractConvParams(prefix: string, mappedPrefix: string): ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/weights`, 4, `${mappedPrefix}/filters`)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/biases`, 1, `${mappedPrefix}/bias`)

    return { filters, bias }
  }

  function extractBoxPredictorParams(idx: number): BoxPredictionParams {

    const box_encoding_predictor = extractConvParams(
      `Prediction/BoxPredictor_${idx}/BoxEncodingPredictor`,
      `prediction_layer/box_predictor_${idx}/box_encoding_predictor`
    )
    const class_predictor = extractConvParams(
      `Prediction/BoxPredictor_${idx}/ClassPredictor`,
      `prediction_layer/box_predictor_${idx}/class_predictor`
    )

    return { box_encoding_predictor, class_predictor }
  }

  function extractPredictionLayerParams(): PredictionLayerParams {
    return {
      conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
      conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
      conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
      conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
      conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
      conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
      conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
      conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
      box_predictor_0: extractBoxPredictorParams(0),
      box_predictor_1: extractBoxPredictorParams(1),
      box_predictor_2: extractBoxPredictorParams(2),
      box_predictor_3: extractBoxPredictorParams(3),
      box_predictor_4: extractBoxPredictorParams(4),
      box_predictor_5: extractBoxPredictorParams(5)
    }
  }

  return {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  }
}

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap
): { params: NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractMobilenetV1Params,
    extractPredictionLayerParams
  } = extractorsFactory(weightMap, paramMappings)

  const extra_dim = weightMap['Output/extra_dim']
  paramMappings.push({ originalPath: 'Output/extra_dim', paramPath: 'output_layer/extra_dim' })

  if (!isTensor3D(extra_dim)) {
    throw new Error(`expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have ${extra_dim}`)
  }

  const params = {
    mobilenetv1: extractMobilenetV1Params(),
    prediction_layer: extractPredictionLayerParams(),
    output_layer: {
      extra_dim
    }
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}