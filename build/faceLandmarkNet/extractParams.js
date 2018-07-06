"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var extractWeightsFactory_1 = require("../commons/extractWeightsFactory");
function extractParams(weights) {
    var paramMappings = [];
    var _a = extractWeightsFactory_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
        return { filters: filters, bias: bias };
    }
    function extractFcParams(channelsIn, channelsOut, mappedPrefix) {
        var fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
        var fc_bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
        return {
            weights: fc_weights,
            bias: fc_bias
        };
    }
    var conv0 = extractConvParams(3, 32, 3, 'conv0');
    var conv1 = extractConvParams(32, 64, 3, 'conv1');
    var conv2 = extractConvParams(64, 64, 3, 'conv2');
    var conv3 = extractConvParams(64, 64, 3, 'conv3');
    var conv4 = extractConvParams(64, 64, 3, 'conv4');
    var conv5 = extractConvParams(64, 128, 3, 'conv5');
    var conv6 = extractConvParams(128, 128, 3, 'conv6');
    var conv7 = extractConvParams(128, 256, 3, 'conv7');
    var fc0 = extractFcParams(6400, 1024, 'fc0');
    var fc1 = extractFcParams(1024, 136, 'fc1');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3,
            conv4: conv4,
            conv5: conv5,
            conv6: conv6,
            conv7: conv7,
            fc0: fc0,
            fc1: fc1
        }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map