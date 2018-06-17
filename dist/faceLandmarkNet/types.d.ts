import * as tf from '@tensorflow/tfjs-core';
import { ConvParams } from '../commons/types';
export declare namespace FaceLandmarkNet {
    type FCParams = {
        weights: tf.Tensor2D;
        bias: tf.Tensor1D;
    };
    type NetParams = {
        conv0_params: ConvParams;
        conv1_params: ConvParams;
        conv2_params: ConvParams;
        conv3_params: ConvParams;
        conv4_params: ConvParams;
        conv5_params: ConvParams;
        conv6_params: ConvParams;
        conv7_params: ConvParams;
        fc0_params: FCParams;
        fc1_params: FCParams;
    };
}
