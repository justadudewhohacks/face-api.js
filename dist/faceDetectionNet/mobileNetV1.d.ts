import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './types';
export declare function mobileNetV1(x: tf.Tensor4D, params: FaceDetectionNet.MobileNetV1.Params): {
    out: tf.Tensor<tf.Rank.R4>;
    conv11: any;
};
