import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { FaceDetection } from './FaceDetection';
export declare function faceDetectionNet(weights: Float32Array): {
    forward: (input: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | (string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[] | tf.Tensor<tf.Rank> | NetInput) => {
        boxes: tf.Tensor<tf.Rank.R2>[];
        scores: tf.Tensor<tf.Rank.R1>[];
    };
    locateFaces: (input: tf.Tensor<tf.Rank> | NetInput, minConfidence?: number, maxResults?: number) => Promise<FaceDetection[]>;
};
