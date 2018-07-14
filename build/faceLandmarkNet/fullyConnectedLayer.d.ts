import * as tf from '@tensorflow/tfjs-core';
import { FCParams } from '../commons/types';
export declare function fullyConnectedLayer(x: tf.Tensor2D, params: FCParams): tf.Tensor2D;
