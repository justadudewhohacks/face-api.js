import * as tf from '@tensorflow/tfjs-core';

import { boxPredictionLayer } from './boxPredictionLayer';
import { pointwiseConvLayer } from './pointwiseConvLayer';
import { PredictionLayerParams } from './types';

export function predictionLayer(
  x: tf.Tensor4D,
  conv11: tf.Tensor4D,
  params: PredictionLayerParams
) {
  return tf.tidy(() => {

    const conv0 = pointwiseConvLayer(x, params.conv_0_params, [1, 1])
    const conv1 = pointwiseConvLayer(conv0, params.conv_1_params, [2, 2])
    const conv2 = pointwiseConvLayer(conv1, params.conv_2_params, [1, 1])
    const conv3 = pointwiseConvLayer(conv2, params.conv_3_params, [2, 2])
    const conv4 = pointwiseConvLayer(conv3, params.conv_4_params, [1, 1])
    const conv5 = pointwiseConvLayer(conv4, params.conv_5_params, [2, 2])
    const conv6 = pointwiseConvLayer(conv5, params.conv_6_params, [1, 1])
    const conv7 = pointwiseConvLayer(conv6, params.conv_7_params, [2, 2])

    const boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0_params)
    const boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1_params)
    const boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2_params)
    const boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3_params)
    const boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4_params)
    const boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5_params)

    const boxPredictions = tf.concat([
      boxPrediction0.boxPredictionEncoding,
      boxPrediction1.boxPredictionEncoding,
      boxPrediction2.boxPredictionEncoding,
      boxPrediction3.boxPredictionEncoding,
      boxPrediction4.boxPredictionEncoding,
      boxPrediction5.boxPredictionEncoding
    ], 1) as tf.Tensor4D

    const classPredictions = tf.concat([
      boxPrediction0.classPrediction,
      boxPrediction1.classPrediction,
      boxPrediction2.classPrediction,
      boxPrediction3.classPrediction,
      boxPrediction4.classPrediction,
      boxPrediction5.classPrediction
    ], 1) as tf.Tensor4D

    return {
      boxPredictions,
      classPredictions
    }
  })
}