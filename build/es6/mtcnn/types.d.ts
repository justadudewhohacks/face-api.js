import * as tf from '@tensorflow/tfjs-core';
import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { WithFaceDetection, WithFaceLandmarks } from '../factories';
export declare type SharedParams = {
    conv1: ConvParams;
    prelu1_alpha: tf.Tensor1D;
    conv2: ConvParams;
    prelu2_alpha: tf.Tensor1D;
    conv3: ConvParams;
    prelu3_alpha: tf.Tensor1D;
};
export declare type PNetParams = SharedParams & {
    conv4_1: ConvParams;
    conv4_2: ConvParams;
};
export declare type RNetParams = SharedParams & {
    fc1: FCParams;
    prelu4_alpha: tf.Tensor1D;
    fc2_1: FCParams;
    fc2_2: FCParams;
};
export declare type ONetParams = SharedParams & {
    conv4: ConvParams;
    prelu4_alpha: tf.Tensor1D;
    fc1: FCParams;
    prelu5_alpha: tf.Tensor1D;
    fc2_1: FCParams;
    fc2_2: FCParams;
    fc2_3: FCParams;
};
export declare type NetParams = {
    pnet: PNetParams;
    rnet: RNetParams;
    onet: ONetParams;
};
export declare type MtcnnResult = WithFaceLandmarks<WithFaceDetection<{}>, FaceLandmarks5>;
