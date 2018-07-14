"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function extractConvParamsFactory(extractWeights, paramMappings) {
    return function (channelsIn, channelsOut, filterSize, mappedPrefix) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
        return { filters: filters, bias: bias };
    };
}
exports.extractConvParamsFactory = extractConvParamsFactory;
//# sourceMappingURL=extractConvParamsFactory.js.map