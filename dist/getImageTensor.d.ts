import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from './NetInput';
import { TNetInput } from './types';
export declare function getImageTensor(input: tf.Tensor | NetInput | TNetInput): tf.Tensor4D;
