import * as tf from '@tensorflow/tfjs-core';
export declare type ScaleLayerParams = {
    weights: tf.Tensor1D;
    biases: tf.Tensor1D;
};
export declare function scale(x: tf.Tensor4D, params: ScaleLayerParams): tf.Tensor4D;
