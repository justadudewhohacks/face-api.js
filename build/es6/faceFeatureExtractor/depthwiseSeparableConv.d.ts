import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export declare function depthwiseSeparableConv(x: tf.Tensor4D, params: TfjsImageRecognitionBase.SeparableConvParams, stride: [number, number]): tf.Tensor4D;
