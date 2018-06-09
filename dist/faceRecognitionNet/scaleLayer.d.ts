import * as tf from '@tensorflow/tfjs-core';
import { FaceRecognitionNet } from './types';
export declare function scale(x: tf.Tensor4D, params: FaceRecognitionNet.ScaleLayerParams): tf.Tensor4D;
