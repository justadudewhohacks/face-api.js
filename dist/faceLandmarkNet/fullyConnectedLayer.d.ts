import * as tf from '@tensorflow/tfjs-core';
import { FaceLandmarkNet } from './types';
export declare function fullyConnectedLayer(x: tf.Tensor2D, params: FaceLandmarkNet.FCParams): tf.Tensor2D;
