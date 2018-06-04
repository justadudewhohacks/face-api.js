import * as tf from '@tensorflow/tfjs-core';

export namespace FaceDetectionNet {

  export namespace MobileNetV1 {

    export type DepthwiseConvParams = {
      filters: tf.Tensor4D
      batch_norm_scale: tf.Tensor1D
      batch_norm_offset: tf.Tensor1D
      batch_norm_mean: tf.Tensor1D
      batch_norm_variance: tf.Tensor1D
    }

    export type PointwiseConvParams = {
      filters: tf.Tensor4D
      batch_norm_offset: tf.Tensor1D
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

  export type NetParams = {
    mobilenetv1_params: MobileNetV1.Params
  }

}
