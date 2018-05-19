import * as tf from '@tensorflow/tfjs-core';
export declare function faceRecognitionNet(weights: Float32Array): {
    computeFaceDescriptor: (input: number[] | ImageData) => Promise<Int32Array | Uint8Array | Float32Array>;
    computeFaceDescriptorSync: (input: number[] | ImageData) => Int32Array | Uint8Array | Float32Array;
    forward: (input: number[] | ImageData) => tf.Tensor<tf.Rank.R2>;
};
