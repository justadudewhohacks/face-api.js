import * as tf from '@tensorflow/tfjs-core';

export namespace FaceDetectionNet {

  export namespace MobileNetV1 {

    export type DepthwiseConvParams = {
      weights: tf.Tensor4D // [3, 3, ch, 1]
      batch_norm_gamma: tf.Tensor1D
      batch_norm_beta: tf.Tensor1D
      batch_norm_mean: tf.Tensor1D
      batch_norm_variance: tf.Tensor1D
    }

    export type PointwiseConvParams = {
      weights: tf.Tensor4D // [1, 1, ch_in, ch_out]
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
