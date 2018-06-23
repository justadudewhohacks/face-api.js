import * as tf from '@tensorflow/tfjs-core';
import { ResidualLayerParams } from './types';
export declare function residual(x: tf.Tensor4D, params: ResidualLayerParams): tf.Tensor4D;
export declare function residualDown(x: tf.Tensor4D, params: ResidualLayerParams): tf.Tensor4D;
