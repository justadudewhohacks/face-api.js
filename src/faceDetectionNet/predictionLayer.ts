import * as tf from '@tensorflow/tfjs-core';

import { boxPredictionLayer } from './boxPredictionLayer';
import { pointwiseConvLayer } from './pointwiseConvLayer';
import { FaceDetectionNet } from './types';

export function predictionLayer(x: tf.Tensor4D, params: FaceDetectionNet.PredictionParams) {
  return tf.tidy(() => {

    const conv0 = pointwiseConvLayer(x, params.conv_0_params, [1, 1])
    const conv1 = pointwiseConvLayer(x, params.conv_1_params, [2, 2])
    const conv2 = pointwiseConvLayer(x, params.conv_2_params, [1, 1])
    const conv3 = pointwiseConvLayer(x, params.conv_3_params, [2, 2])
    const conv4 = pointwiseConvLayer(x, params.conv_4_params, [1, 1])
    const conv5 = pointwiseConvLayer(x, params.conv_5_params, [2, 2])
    const conv6 = pointwiseConvLayer(x, params.conv_4_params, [1, 1])
    const conv7 = pointwiseConvLayer(x, params.conv_5_params, [2, 2])

    const boxPrediction0 = boxPredictionLayer(x, params.box_predictor_0_params, 3072)
    const boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1_params, 1536)
    const boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2_params, 384)
    const boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3_params, 96)
    const boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4_params, 24)
    const boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5_params, 6)

    const boxPredictions = tf.concat([
      boxPrediction0.boxPredictionEncoding,
      boxPrediction1.boxPredictionEncoding,
      boxPrediction2.boxPredictionEncoding,
      boxPrediction3.boxPredictionEncoding,
      boxPrediction4.boxPredictionEncoding,
      boxPrediction5.boxPredictionEncoding
    ])

    const classPredictions = tf.concat([
      boxPrediction0.classPrediction,
      boxPrediction1.classPrediction,
      boxPrediction2.classPrediction,
      boxPrediction3.classPrediction,
      boxPrediction4.classPrediction,
      boxPrediction5.classPrediction
    ])

    return {
      boxPredictions,
      classPredictions
    }
  })
}