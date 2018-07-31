"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var extractConvParamsFactory_1 = require("../commons/extractConvParamsFactory");
var extractWeightsFactory_1 = require("../commons/extractWeightsFactory");
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = extractConvParamsFactory_1.extractConvParamsFactory(extractWeights, paramMappings);
    function extractBatchNormParams(size, mappedPrefix) {
        var sub = tf.tensor1d(extractWeights(size));
        var truediv = tf.tensor1d(extractWeights(size));
        paramMappings.push({ paramPath: mappedPrefix + "/sub" }, { paramPath: mappedPrefix + "/truediv" });
        return { sub: sub, truediv: truediv };
    }
    function extractConvWithBatchNormParams(channelsIn, channelsOut, mappedPrefix) {
        var conv = extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv");
        var bn = extractBatchNormParams(channelsOut, mappedPrefix + "/bn");
        return { conv: conv, bn: bn };
    }
    return {
        extractConvParams: extractConvParams,
        extractConvWithBatchNormParams: extractConvWithBatchNormParams
    };
}
function extractParams(weights) {
    var _a = extractWeightsFactory_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams;
    var conv0 = extractConvWithBatchNormParams(3, 16, 'conv0');
    var conv1 = extractConvWithBatchNormParams(16, 32, 'conv1');
    var conv2 = extractConvWithBatchNormParams(32, 64, 'conv2');
    var conv3 = extractConvWithBatchNormParams(64, 128, 'conv3');
    var conv4 = extractConvWithBatchNormParams(128, 256, 'conv4');
    var conv5 = extractConvWithBatchNormParams(256, 512, 'conv5');
    var conv6 = extractConvWithBatchNormParams(512, 1024, 'conv6');
    var conv7 = extractConvWithBatchNormParams(1024, 1024, 'conv7');
    var conv8 = extractConvParams(1024, 30, 1, 'conv8');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    var params = { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3, conv4: conv4, conv5: conv5, conv6: conv6, conv7: conv7, conv8: conv8 };
    return { params: params, paramMappings: paramMappings };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map