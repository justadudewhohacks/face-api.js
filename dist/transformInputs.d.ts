import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from './NetInput';
import { TNetInput } from './types';
export declare function padToSquare(imgTensor: tf.Tensor4D): tf.Tensor4D;
export declare function getImageTensor(input: tf.Tensor | NetInput | TNetInput): tf.Tensor4D;
