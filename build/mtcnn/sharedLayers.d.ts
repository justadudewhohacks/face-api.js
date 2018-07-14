import * as tf from '@tensorflow/tfjs-core';
import { SharedParams } from './types';
export declare function sharedLayer(x: tf.Tensor4D, params: SharedParams, isPnet?: boolean): tf.Tensor<tf.Rank.R4>;
