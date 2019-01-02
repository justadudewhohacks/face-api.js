import * as tf from '@tensorflow/tfjs-core';
import { DenseBlock3Params, DenseBlock4Params } from './types';
export declare function denseBlock3(x: tf.Tensor4D, denseBlockParams: DenseBlock3Params, isFirstLayer?: boolean): tf.Tensor4D;
export declare function denseBlock4(x: tf.Tensor4D, denseBlockParams: DenseBlock4Params, isFirstLayer?: boolean, isScaleDown?: boolean): tf.Tensor4D;
