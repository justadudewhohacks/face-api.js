"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var extractConvParamsFactory_1 = require("../commons/extractConvParamsFactory");
var extractWeightsFactory_1 = require("../commons/extractWeightsFactory");
function extractParams(weights) {
    var paramMappings = [];
    var _a = extractWeightsFactory_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractConvParams = extractConvParamsFactory_1.extractConvParamsFactory(extractWeights, paramMappings);
    function extractFcParams(channelsIn, channelsOut, mappedPrefix) {
        var fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
        var fc_bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
        return {
            weights: fc_weights,
            bias: fc_bias
        };
    }
    var conv0_params = extractConvParams(3, 32, 3, 'conv0_params');
    var conv1_params = extractConvParams(32, 64, 3, 'conv1_params');
    var conv2_params = extractConvParams(64, 64, 3, 'conv2_params');
    var conv3_params = extractConvParams(64, 64, 3, 'conv3_params');
    var conv4_params = extractConvParams(64, 64, 3, 'conv4_params');
    var conv5_params = extractConvParams(64, 128, 3, 'conv5_params');
    var conv6_params = extractConvParams(128, 128, 3, 'conv6_params');
    var conv7_params = extractConvParams(128, 256, 3, 'conv7_params');
    var fc0_params = extractFcParams(6400, 1024, 'fc0_params');
    var fc1_params = extractFcParams(1024, 136, 'fc1_params');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            conv0_params: conv0_params,
            conv1_params: conv1_params,
            conv2_params: conv2_params,
            conv3_params: conv3_params,
            conv4_params: conv4_params,
            conv5_params: conv5_params,
            conv6_params: conv6_params,
            conv7_params: conv7_params,
            fc0_params: fc0_params,
            fc1_params: fc1_params
        }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map