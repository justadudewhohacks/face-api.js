import * as tf from '@tensorflow/tfjs-core';
import { ConvParams } from '../commons/types';
export declare type PointwiseConvParams = {
    filters: tf.Tensor4D;
    batch_norm_offset: tf.Tensor1D;
};
export declare namespace MobileNetV1 {
    type DepthwiseConvParams = {
        filters: tf.Tensor4D;
        batch_norm_scale: tf.Tensor1D;
        batch_norm_offset: tf.Tensor1D;
        batch_norm_mean: tf.Tensor1D;
        batch_norm_variance: tf.Tensor1D;
    };
    type ConvPairParams = {
        depthwise_conv_params: DepthwiseConvParams;
        pointwise_conv_params: PointwiseConvParams;
    };
    type Params = {
        conv_0_params: PointwiseConvParams;
        conv_pair_params: ConvPairParams[];
    };
}
export declare type BoxPredictionParams = {
    box_encoding_predictor_params: ConvParams;
    class_predictor_params: ConvParams;
};
export declare type PredictionLayerParams = {
    conv_0_params: PointwiseConvParams;
    conv_1_params: PointwiseConvParams;
    conv_2_params: PointwiseConvParams;
    conv_3_params: PointwiseConvParams;
    conv_4_params: PointwiseConvParams;
    conv_5_params: PointwiseConvParams;
    conv_6_params: PointwiseConvParams;
    conv_7_params: PointwiseConvParams;
    box_predictor_0_params: BoxPredictionParams;
    box_predictor_1_params: BoxPredictionParams;
    box_predictor_2_params: BoxPredictionParams;
    box_predictor_3_params: BoxPredictionParams;
    box_predictor_4_params: BoxPredictionParams;
    box_predictor_5_params: BoxPredictionParams;
};
export declare type OutputLayerParams = {
    extra_dim: tf.Tensor3D;
};
export declare type NetParams = {
    mobilenetv1_params: MobileNetV1.Params;
    prediction_layer_params: PredictionLayerParams;
    output_layer_params: OutputLayerParams;
};
