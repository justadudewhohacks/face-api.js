import * as tf from '@tensorflow/tfjs-core';
import { ConvLayerParams } from './types';
export declare function conv(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convNoRelu(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convDown(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
