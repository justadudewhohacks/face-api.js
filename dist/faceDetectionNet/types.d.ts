import * as tf from '@tensorflow/tfjs-core';
export declare namespace FaceDetectionNet {
    type PointwiseConvParams = {
        filters: tf.Tensor4D;
        batch_norm_offset: tf.Tensor1D;
    };
    namespace MobileNetV1 {
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
    type ConvWithBiasParams = {
        filters: tf.Tensor4D;
        bias: tf.Tensor1D;
    };
    type BoxPredictionParams = {
        box_encoding_predictor_params: ConvWithBiasParams;
        class_predictor_params: ConvWithBiasParams;
    };
    type PredictionLayerParams = {
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
    type OutputLayerParams = {
        extra_dim: tf.Tensor3D;
    };
    type NetParams = {
        mobilenetv1_params: MobileNetV1.Params;
        prediction_layer_params: PredictionLayerParams;
        output_layer_params: OutputLayerParams;
    };
    type Detection = {
        score: number;
        box: {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
}
