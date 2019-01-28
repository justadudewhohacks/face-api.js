import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

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
    depthwise_conv: DepthwiseConvParams
    pointwise_conv: PointwiseConvParams
  }

  export type Params = {
    conv_0: PointwiseConvParams
    conv_1: ConvPairParams
    conv_2: ConvPairParams
    conv_3: ConvPairParams
    conv_4: ConvPairParams
    conv_5: ConvPairParams
    conv_6: ConvPairParams
    conv_7: ConvPairParams
    conv_8: ConvPairParams
    conv_9: ConvPairParams
    conv_10: ConvPairParams
    conv_11: ConvPairParams
    conv_12: ConvPairParams
    conv_13: ConvPairParams
  }

}

export type BoxPredictionParams = {
  box_encoding_predictor: TfjsImageRecognitionBase.ConvParams
  class_predictor: TfjsImageRecognitionBase.ConvParams
}

export type PredictionLayerParams = {
  conv_0: PointwiseConvParams
  conv_1: PointwiseConvParams
  conv_2: PointwiseConvParams
  conv_3: PointwiseConvParams
  conv_4: PointwiseConvParams
  conv_5: PointwiseConvParams
  conv_6: PointwiseConvParams
  conv_7: PointwiseConvParams
  box_predictor_0: BoxPredictionParams
  box_predictor_1: BoxPredictionParams
  box_predictor_2: BoxPredictionParams
  box_predictor_3: BoxPredictionParams
  box_predictor_4: BoxPredictionParams
  box_predictor_5: BoxPredictionParams
}

export type OutputLayerParams = {
  extra_dim: tf.Tensor3D
}

export type NetParams = {
  mobilenetv1: MobileNetV1.Params,
  prediction_layer: PredictionLayerParams,
  output_layer: OutputLayerParams
}