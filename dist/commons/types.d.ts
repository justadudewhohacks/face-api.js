import * as tf from '@tensorflow/tfjs-core';
export declare type ConvParams = {
    filters: tf.Tensor4D;
    bias: tf.Tensor1D;
};
export declare type ExtractWeightsFunction = (numWeights: number) => Float32Array;
