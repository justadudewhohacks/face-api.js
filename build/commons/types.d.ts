import * as tf from '@tensorflow/tfjs-core';
export declare type ConvParams = {
    filters: tf.Tensor4D;
    bias: tf.Tensor1D;
};
export declare type ExtractWeightsFunction = (numWeights: number) => Float32Array;
export declare type BatchReshapeInfo = {
    originalWidth: number;
    originalHeight: number;
    paddingX: number;
    paddingY: number;
};
export declare type ParamMapping = {
    originalPath?: string;
    paramPath: string;
};
