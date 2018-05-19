export declare function faceRecognitionNet(weights: Float32Array): {
    computeFaceDescriptor: (input: number[]) => Promise<Int32Array | Uint8Array | Float32Array>;
    computeFaceDescriptorSync: (input: number[]) => Int32Array | Uint8Array | Float32Array;
};
