import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { WithFaceDetection, WithFaceLandmarks } from '../factories';
export declare type SharedParams = {
    conv1: TfjsImageRecognitionBase.ConvParams;
    prelu1_alpha: tf.Tensor1D;
    conv2: TfjsImageRecognitionBase.ConvParams;
    prelu2_alpha: tf.Tensor1D;
    conv3: TfjsImageRecognitionBase.ConvParams;
    prelu3_alpha: tf.Tensor1D;
};
export declare type PNetParams = SharedParams & {
    conv4_1: TfjsImageRecognitionBase.ConvParams;
    conv4_2: TfjsImageRecognitionBase.ConvParams;
};
export declare type RNetParams = SharedParams & {
    fc1: TfjsImageRecognitionBase.FCParams;
    prelu4_alpha: tf.Tensor1D;
    fc2_1: TfjsImageRecognitionBase.FCParams;
    fc2_2: TfjsImageRecognitionBase.FCParams;
};
export declare type ONetParams = SharedParams & {
    conv4: TfjsImageRecognitionBase.ConvParams;
    prelu4_alpha: tf.Tensor1D;
    fc1: TfjsImageRecognitionBase.FCParams;
    prelu5_alpha: tf.Tensor1D;
    fc2_1: TfjsImageRecognitionBase.FCParams;
    fc2_2: TfjsImageRecognitionBase.FCParams;
    fc2_3: TfjsImageRecognitionBase.FCParams;
};
export declare type NetParams = {
    pnet: PNetParams;
    rnet: RNetParams;
    onet: ONetParams;
};
export declare type MtcnnResult = WithFaceLandmarks<WithFaceDetection<{}>, FaceLandmarks5>;
