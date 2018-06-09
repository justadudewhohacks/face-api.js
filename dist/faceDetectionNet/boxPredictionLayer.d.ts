import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './types';
export declare function boxPredictionLayer(x: tf.Tensor4D, params: FaceDetectionNet.BoxPredictionParams): {
    boxPredictionEncoding: tf.Tensor<tf.Rank>;
    classPrediction: tf.Tensor<tf.Rank>;
};
