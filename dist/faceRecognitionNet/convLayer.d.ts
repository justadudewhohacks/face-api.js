import * as tf from '@tensorflow/tfjs-core';
import { FaceRecognitionNet } from './types';
export declare function conv(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convNoRelu(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams): tf.Tensor<tf.Rank.R4>;
export declare function convDown(x: tf.Tensor4D, params: FaceRecognitionNet.ConvLayerParams): tf.Tensor<tf.Rank.R4>;
