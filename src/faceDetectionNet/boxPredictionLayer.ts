import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet } from './types';

function convWithBias(
  x: tf.Tensor4D,
  params: FaceDetectionNet.ConvWithBiasParams
) {
  return tf.tidy(() =>
    tf.add(
      tf.conv2d(x, params.filters, [1, 1], 'same'),
      params.bias
    )
  )
}

export function boxPredictionLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.BoxPredictionParams
) {
  return tf.tidy(() => {

    const batchSize = x.shape[0]

    const boxPredictionEncoding = tf.reshape(
      convWithBias(x, params.box_encoding_predictor_params),
      [batchSize, -1, 1, 4]
    )
    const classPrediction = tf.reshape(
      convWithBias(x, params.class_predictor_params),
      [batchSize, -1, 3]
    )

    return {
      boxPredictionEncoding,
      classPrediction
    }
  })
}