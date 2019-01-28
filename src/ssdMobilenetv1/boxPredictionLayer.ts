import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { BoxPredictionParams } from './types';


export function boxPredictionLayer(
  x: tf.Tensor4D,
  params: BoxPredictionParams
) {
  return tf.tidy(() => {

    const batchSize = x.shape[0]

    const boxPredictionEncoding = tf.reshape(
      TfjsImageRecognitionBase.convLayer(x, params.box_encoding_predictor),
      [batchSize, -1, 1, 4]
    )
    const classPrediction = tf.reshape(
      TfjsImageRecognitionBase.convLayer(x, params.class_predictor),
      [batchSize, -1, 3]
    )

    return {
      boxPredictionEncoding,
      classPrediction
    }
  })
}