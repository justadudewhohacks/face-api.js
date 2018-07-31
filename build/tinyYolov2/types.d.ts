import * as tf from '@tensorflow/tfjs-core';
import { ConvParams } from '../commons/types';
export declare type BatchNorm = {
    sub: tf.Tensor1D;
    truediv: tf.Tensor1D;
};
export declare type ConvWithBatchNorm = {
    conv: ConvParams;
    bn: BatchNorm;
};
export declare type NetParams = {
    conv0: ConvWithBatchNorm;
    conv1: ConvWithBatchNorm;
    conv2: ConvWithBatchNorm;
    conv3: ConvWithBatchNorm;
    conv4: ConvWithBatchNorm;
    conv5: ConvWithBatchNorm;
    conv6: ConvWithBatchNorm;
    conv7: ConvWithBatchNorm;
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
