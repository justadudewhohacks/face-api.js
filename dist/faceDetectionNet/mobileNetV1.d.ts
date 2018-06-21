import * as tf from '@tensorflow/tfjs-core';
import { MobileNetV1 } from './types';
export declare function mobileNetV1(x: tf.Tensor4D, params: MobileNetV1.Params): {
    out: tf.Tensor<tf.Rank.R4>;
    conv11: any;
};
