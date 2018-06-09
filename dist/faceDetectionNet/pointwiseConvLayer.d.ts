import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionNet } from './types';
export declare function pointwiseConvLayer(x: tf.Tensor4D, params: FaceDetectionNet.PointwiseConvParams, strides: [number, number]): tf.Tensor<tf.Rank.R4>;
