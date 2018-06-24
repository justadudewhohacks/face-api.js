export declare function extractWeightsFactory(weights: Float32Array): {
    extractWeights: (numWeights: number) => Float32Array;
    getRemainingWeights: () => Float32Array;
};
