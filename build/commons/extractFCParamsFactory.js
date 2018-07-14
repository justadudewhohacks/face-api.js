"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function extractFCParamsFactory(extractWeights, paramMappings) {
    return function (channelsIn, channelsOut, mappedPrefix) {
        var fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
        var fc_bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
        return {
            weights: fc_weights,
            bias: fc_bias
        };
    };
}
exports.extractFCParamsFactory = extractFCParamsFactory;
//# sourceMappingURL=extractFCParamsFactory.js.map