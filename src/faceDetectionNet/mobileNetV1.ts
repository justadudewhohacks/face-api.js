import * as tf from '@tensorflow/tfjs-core';

import { FaceDetectionNet } from './types';

export function mobileNetV1(x: tf.Tensor4D, params: FaceDetectionNet.MobileNetV1.Params) {
  return x
}