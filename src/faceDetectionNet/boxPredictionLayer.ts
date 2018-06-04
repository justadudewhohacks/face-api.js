import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet } from './types';

function boxEncodingPredictionLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.ConvWithBiasParams
) {
  return tf.tidy(() => {

    // TODO
    return x

  })
}

function classPredictionLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.ConvWithBiasParams
) {
  return tf.tidy(() => {

    // TODO
    return x

  })
}

export function boxPredictionLayer(
  x: tf.Tensor4D,
  params: FaceDetectionNet.BoxPredictionParams,
  size: number
) {
  return tf.tidy(() => {

    const boxPredictionEncoding = tf.reshape(
      boxEncodingPredictionLayer(x, params.box_encoding_predictor_params),
      [x.shape[0], size, 1, 4]
    )
    const classPrediction = tf.reshape(
      classPredictionLayer(x, params.class_predictor_params),
      [x.shape[0], size, 3]
    )

    return {
      boxPredictionEncoding,
      classPrediction
    }
  })
}