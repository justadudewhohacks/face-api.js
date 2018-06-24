"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function extractConvParamsFactory(extractWeights) {
    return function (channelsIn, channelsOut, filterSize) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        return {
            filters: filters,
            bias: bias
        };
    };
}
exports.extractConvParamsFactory = extractConvParamsFactory;
//# sourceMappingURL=extractConvParamsFactory.js.map