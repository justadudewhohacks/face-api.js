import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './types';
export declare function outputLayer(boxPredictions: tf.Tensor4D, classPredictions: tf.Tensor4D, params: FaceDetectionNet.OutputLayerParams): {
    boxes: tf.Tensor<tf.Rank.R2>[];
    scores: tf.Tensor<tf.Rank.R1>[];
};
