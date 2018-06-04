import * as tf from '@tensorflow/tfjs-core';

export namespace FaceDetectionNet {

  export type PointwiseConvParams = {
    filters: tf.Tensor4D
    batch_norm_offset: tf.Tensor1D
  }

  export namespace MobileNetV1 {

    export type DepthwiseConvParams = {
      filters: tf.Tensor4D
      batch_norm_scale: tf.Tensor1D
      batch_norm_offset: tf.Tensor1D
      batch_norm_mean: tf.Tensor1D
      batch_norm_variance: tf.Tensor1D
    }

    export type ConvPairParams = {
      depthwise_conv_params: DepthwiseConvParams
      pointwise_conv_params: PointwiseConvParams
    }

    export type Params = {
      conv_0_params: PointwiseConvParams
      conv_pair_params: ConvPairParams[]
    }

  }

  export type ConvWithBiasParams = {
    filters: tf.Tensor4D
    bias: tf.Tensor1D
  }

  export type BoxPredictionParams = {
    class_predictor_params: ConvWithBiasParams
    box_encoding_predictor_params: ConvWithBiasParams
  }

  export type PredictionParams = {
    conv_0_params: PointwiseConvParams
    conv_1_params: PointwiseConvParams
    conv_2_params: PointwiseConvParams
    conv_3_params: PointwiseConvParams
    conv_4_params: PointwiseConvParams
    conv_5_params: PointwiseConvParams
    box_predictor_0_params: BoxPredictionParams
    box_predictor_1_params: BoxPredictionParams
    box_predictor_2_params: BoxPredictionParams
    box_predictor_3_params: BoxPredictionParams
    box_predictor_4_params: BoxPredictionParams
    box_predictor_5_params: BoxPredictionParams
  }

  export type NetParams = {
    mobilenetv1_params: MobileNetV1.Params
  }

}
