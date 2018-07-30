import * as tf from '@tensorflow/tfjs-core';

import { ConvParams } from '../commons/types';

export type BatchNorm = {
  sub: tf.Tensor1D
  truediv: tf.Tensor1D
}

export type ConvWithBatchNorm = {
  conv: ConvParams
  bn: BatchNorm
}

export type NetParams = {
  conv0: ConvWithBatchNorm
  conv1: ConvWithBatchNorm
  conv2: ConvWithBatchNorm
  conv3: ConvWithBatchNorm
  conv4: ConvWithBatchNorm
  conv5: ConvWithBatchNorm
  conv6: ConvWithBatchNorm
  conv7: ConvWithBatchNorm
  conv8: ConvParams
}

export enum SizeType {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

export type TinyYolov2ForwardParams = {
  sizeType?: SizeType
  scoreThreshold?: number
}