import * as tf from '@tensorflow/tfjs-core';
export function extractConvParamsFactory(extractWeights) {
    return function (channelsIn, channelsOut, filterSize) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        return {
            filters: filters,
            bias: bias
        };
    };
}
//# sourceMappingURL=extractConvParamsFactory.js.map