import * as tf from '@tensorflow/tfjs-core';
import { ConvParams } from './types';
export declare function convLayer(x: tf.Tensor4D, params: ConvParams, padding?: 'valid' | 'same', withRelu?: boolean): tf.Tensor4D;
