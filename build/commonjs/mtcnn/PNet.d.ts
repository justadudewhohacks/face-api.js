import * as tf from '@tensorflow/tfjs-core';
import { PNetParams } from './types';
export declare function PNet(x: tf.Tensor4D, params: PNetParams): {
    prob: tf.Tensor4D;
    regions: tf.Tensor4D;
};
