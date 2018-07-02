import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { BatchReshapeInfo } from './types';
export declare function toInputTensor(input: tf.Tensor | tf.Tensor[] | NetInput, inputSize: number, center?: boolean): {
    batchTensor: tf.Tensor4D;
    batchInfo: BatchReshapeInfo[];
};
