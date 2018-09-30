import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox } from 'tfjs-image-recognition-base';
import { PNetParams } from './types';
export declare function stage1(imgTensor: tf.Tensor4D, scales: number[], scoreThreshold: number, params: PNetParams, stats: any): {
    boxes: BoundingBox[];
    scores: number[];
};
