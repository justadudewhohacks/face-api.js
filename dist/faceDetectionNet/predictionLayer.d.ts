import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './types';
export declare function predictionLayer(x: tf.Tensor4D, conv11: tf.Tensor4D, params: FaceDetectionNet.PredictionLayerParams): {
    boxPredictions: tf.Tensor<tf.Rank.R4>;
    classPredictions: tf.Tensor<tf.Rank.R4>;
};
