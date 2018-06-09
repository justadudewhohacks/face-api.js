import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
export declare function faceRecognitionNet(weights: Float32Array): {
    computeFaceDescriptor: (input: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | (string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[] | tf.Tensor<tf.Rank> | NetInput) => Promise<Int32Array | Uint8Array | Float32Array>;
    computeFaceDescriptorSync: (input: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | (string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[] | tf.Tensor<tf.Rank> | NetInput) => Int32Array | Uint8Array | Float32Array;
    forward: (input: string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | (string | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[] | tf.Tensor<tf.Rank> | NetInput) => tf.Tensor<tf.Rank.R2>;
};
