import * as tf from '@tensorflow/tfjs-core';
import { ConvLayerParams } from './convLayer';
export declare type ResidualLayerParams = {
    conv1: ConvLayerParams;
    conv2: ConvLayerParams;
};
export declare function residual(x: tf.Tensor4D, params: ResidualLayerParams): tf.Tensor4D;
export declare function residualDown(x: tf.Tensor4D, params: ResidualLayerParams): tf.Tensor4D;
