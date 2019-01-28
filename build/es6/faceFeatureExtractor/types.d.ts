import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput, TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
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
export declare type DenseBlock3Params = {
    conv0: TfjsImageRecognitionBase.SeparableConvParams | TfjsImageRecognitionBase.ConvParams;
    conv1: TfjsImageRecognitionBase.SeparableConvParams;
    conv2: TfjsImageRecognitionBase.SeparableConvParams;
};
export declare type DenseBlock4Params = DenseBlock3Params & {
    conv3: TfjsImageRecognitionBase.SeparableConvParams;
};
export declare type TinyFaceFeatureExtractorParams = {
    dense0: DenseBlock3Params;
    dense1: DenseBlock3Params;
    dense2: DenseBlock3Params;
};
export declare type FaceFeatureExtractorParams = {
    dense0: DenseBlock4Params;
    dense1: DenseBlock4Params;
    dense2: DenseBlock4Params;
    dense3: DenseBlock4Params;
};
export interface IFaceFeatureExtractor<TNetParams extends TinyFaceFeatureExtractorParams | FaceFeatureExtractorParams> extends NeuralNetwork<TNetParams> {
    forwardInput(input: NetInput): tf.Tensor4D;
    forward(input: TNetInput): Promise<tf.Tensor4D>;
}
