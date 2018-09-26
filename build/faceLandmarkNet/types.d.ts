import * as tf from '@tensorflow/tfjs-core';
import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';
export declare type ConvWithBatchNormParams = BatchNormParams & {
    filter: tf.Tensor4D;
};
export declare type BatchNormParams = {
    mean: tf.Tensor1D;
    variance: tf.Tensor1D;
    scale: tf.Tensor1D;
    offset: tf.Tensor1D;
};
export declare type SeparableConvWithBatchNormParams = {
    depthwise: ConvWithBatchNormParams;
    pointwise: ConvWithBatchNormParams;
};
export declare type FCWithBatchNormParams = BatchNormParams & {
    weights: tf.Tensor2D;
};
export declare type DenseBlock3Params = {
    conv0: SeparableConvParams | ConvParams;
    conv1: SeparableConvParams;
    conv2: SeparableConvParams;
};
export declare type DenseBlock4Params = DenseBlock3Params & {
    conv3: SeparableConvParams;
};
export declare type TinyNetParams = {
    dense0: DenseBlock3Params;
    dense1: DenseBlock3Params;
    dense2: DenseBlock3Params;
    fc: FCParams;
};
export declare type NetParams = {
    dense0: DenseBlock4Params;
    dense1: DenseBlock4Params;
    dense2: DenseBlock4Params;
    dense3: DenseBlock4Params;
    fc: FCParams;
};
