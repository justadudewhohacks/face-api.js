import * as tf from '@tensorflow/tfjs-core';
import { ConvParams } from '../commons/types';
import { Point } from '../Point';
export declare type BatchNorm = {
    sub: tf.Tensor1D;
    truediv: tf.Tensor1D;
};
export declare class SeparableConvParams {
    depthwise_filter: tf.Tensor4D;
    pointwise_filter: tf.Tensor4D;
    bias: tf.Tensor1D;
    constructor(depthwise_filter: tf.Tensor4D, pointwise_filter: tf.Tensor4D, bias: tf.Tensor1D);
}
export declare type ConvWithBatchNorm = {
    conv: ConvParams;
    bn: BatchNorm;
};
export declare type NetParams = {
    conv0: ConvWithBatchNorm | SeparableConvParams;
    conv1: ConvWithBatchNorm | SeparableConvParams;
    conv2: ConvWithBatchNorm | SeparableConvParams;
    conv3: ConvWithBatchNorm | SeparableConvParams;
    conv4: ConvWithBatchNorm | SeparableConvParams;
    conv5: ConvWithBatchNorm | SeparableConvParams;
    conv6: ConvWithBatchNorm | SeparableConvParams;
    conv7: ConvWithBatchNorm | SeparableConvParams;
    conv8: ConvParams;
};
export declare enum SizeType {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
}
export declare type TinyYolov2ForwardParams = {
    inputSize?: SizeType | number;
    scoreThreshold?: number;
};
export declare type PostProcessingParams = {
    scoreThreshold?: number;
    paddings: Point;
};
