import * as tf from '@tensorflow/tfjs-core';
import { SeparableConvParams } from 'tfjs-tiny-yolov2';
export declare function depthwiseSeparableConv(x: tf.Tensor4D, params: SeparableConvParams, stride: [number, number]): tf.Tensor4D;
