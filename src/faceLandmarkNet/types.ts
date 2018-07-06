import * as tf from '@tensorflow/tfjs-core';

import { ConvParams } from '../commons/types';

export type FCParams = {
  weights: tf.Tensor2D
  bias: tf.Tensor1D
}

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