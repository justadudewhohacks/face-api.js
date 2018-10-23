import * as tf from '@tensorflow/tfjs-core';
export declare function nonMaxSuppression(boxes: tf.Tensor2D, scores: number[], maxOutputSize: number, iouThreshold: number, scoreThreshold: number): number[];
