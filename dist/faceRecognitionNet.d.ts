import * as tf from '@tensorflow/tfjs-core';
export declare type ConvLayerParams = {
    filters: tf.Tensor4D;
    biases: tf.Tensor1D;
};
export declare type ScaleLayerParams = {
    weights: tf.Tensor1D;
    biases: tf.Tensor1D;
};
export declare type ConvBlockParams = {
    conv: ConvLayerParams;
    scale: ScaleLayerParams;
};
export declare type ResBlockParams = {
    conv1: ConvBlockParams;
    conv2: ConvBlockParams;
};
export declare type ParamMap = {
    conv32_in: ConvBlockParams;
    conv32_1: ResBlockParams;
    conv32_2: ResBlockParams;
    conv32_3: ResBlockParams;
    conv64_in: ResBlockParams;
    conv64_1: ResBlockParams;
    conv64_2: ResBlockParams;
    conv64_3: ResBlockParams;
    conv128_in: ResBlockParams;
    conv128_1: ResBlockParams;
    conv128_2: ResBlockParams;
    conv256_in: ResBlockParams;
    conv256_1: ResBlockParams;
    conv256_2: ResBlockParams;
    conv256_3: ResBlockParams;
    fc: tf.Tensor2D;
};
export declare function faceRecognitionNet(weights: Float32Array): (input: number[]) => number[];
