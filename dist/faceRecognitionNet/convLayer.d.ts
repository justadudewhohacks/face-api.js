import * as tf from '@tensorflow/tfjs-core';
import { ScaleLayerParams } from './scaleLayer';
export declare type ConvParams = {
    filters: tf.Tensor4D;
    biases: tf.Tensor1D;
};
export declare type ConvLayerParams = {
    conv: ConvParams;
    scale: ScaleLayerParams;
};
export declare function conv(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convNoRelu(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convDown(x: tf.Tensor4D, params: ConvLayerParams): tf.Tensor<tf.Rank.R4>;
