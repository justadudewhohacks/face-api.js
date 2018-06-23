import * as tf from '@tensorflow/tfjs-core';

import { convLayer } from '../commons/convLayer';
import { BoxPredictionParams } from './types';


export function boxPredictionLayer(
  x: tf.Tensor4D,
  params: BoxPredictionParams
) {
  return tf.tidy(() => {

    const batchSize = x.shape[0]

    const boxPredictionEncoding = tf.reshape(
      convLayer(x, params.box_encoding_predictor_params),
      [batchSize, -1, 1, 4]
    )
    const classPrediction = tf.reshape(
      convLayer(x, params.class_predictor_params),
      [batchSize, -1, 3]
    )

    return {
      boxPredictionEncoding,
      classPrediction
    }
  })
}