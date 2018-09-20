import * as tf from '@tensorflow/tfjs-core';
import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';

export type NetParams = {
  conv0: ConvParams
  conv1: ConvParams
  conv2: ConvParams
  conv3: ConvParams
  conv4: ConvParams
  conv5: ConvParams
  conv6: ConvParams
  conv7: ConvParams
  fc0: FCParams
  fc1: FCParams
}

export type ConvWithBatchNormParams = BatchNormParams & {
  filter: tf.Tensor4D
}

export type BatchNormParams = {
  mean: tf.Tensor1D
  variance: tf.Tensor1D
  scale: tf.Tensor1D
  offset: tf.Tensor1D
}

export type SeparableConvWithBatchNormParams = {
  depthwise: ConvWithBatchNormParams
  pointwise: ConvWithBatchNormParams
}

export declare type FCWithBatchNormParams = BatchNormParams & {
    weights: tf.Tensor2D
}

export type DenseBlockParams = {
  conv0: SeparableConvParams | ConvParams
  conv1: SeparableConvParams
  conv2: SeparableConvParams
  //conv3: SeparableConvParams
}

export type TinyNetParams = {
  dense0: DenseBlockParams
  dense1: DenseBlockParams
  dense2: DenseBlockParams
  fc: FCParams
}

export type MobileResnetParams = {
  conv0: SeparableConvParams
  conv1: SeparableConvParams
  conv2: SeparableConvParams
  conv3: SeparableConvParams
  conv4: SeparableConvParams
  conv5: SeparableConvParams
  fc: FCParams
}

