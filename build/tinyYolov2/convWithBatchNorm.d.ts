import * as tf from '@tensorflow/tfjs-core';
import { ConvWithBatchNorm, SeparableConvParams } from './types';
export declare function convWithBatchNorm(x: tf.Tensor4D, params: ConvWithBatchNorm | SeparableConvParams): tf.Tensor4D;
