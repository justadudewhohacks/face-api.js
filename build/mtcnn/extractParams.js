"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = tfjs_tiny_yolov2_1.extractConvParamsFactory(extractWeights, paramMappings);
    var extractFCParams = tfjs_tiny_yolov2_1.extractFCParamsFactory(extractWeights, paramMappings);
    function extractPReluParams(size, paramPath) {
        var alpha = tf.tensor1d(extractWeights(size));
        paramMappings.push({ paramPath: paramPath });
        return alpha;
    }
    function extractSharedParams(numFilters, mappedPrefix, isRnet) {
        if (isRnet === void 0) { isRnet = false; }
        var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
        var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
        var conv2 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
        var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
        var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
        var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
        return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
    }
    function extractPNetParams() {
        var sharedParams = extractSharedParams([3, 10, 16, 32], 'pnet');
        var conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1');
        var conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2');
        return tslib_1.__assign({}, sharedParams, { conv4_1: conv4_1, conv4_2: conv4_2 });
    }
    function extractRNetParams() {
        var sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true);
        var fc1 = extractFCParams(576, 128, 'rnet/fc1');
        var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
        var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
        var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
        return tslib_1.__assign({}, sharedParams, { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
    }
    function extractONetParams() {
        var sharedParams = extractSharedParams([3, 32, 64, 64], 'onet');
        var conv4 = extractConvParams(64, 128, 2, 'onet/conv4');
        var prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha');
        var fc1 = extractFCParams(1152, 256, 'onet/fc1');
        var prelu5_alpha = extractPReluParams(256, 'onet/prelu5_alpha');
        var fc2_1 = extractFCParams(256, 2, 'onet/fc2_1');
        var fc2_2 = extractFCParams(256, 4, 'onet/fc2_2');
        var fc2_3 = extractFCParams(256, 10, 'onet/fc2_3');
        return tslib_1.__assign({}, sharedParams, { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
    }
    return {
        extractPNetParams: extractPNetParams,
        extractRNetParams: extractRNetParams,
        extractONetParams: extractONetParams
    };
}
function extractParams(weights) {
    var _a = tfjs_image_recognition_base_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
    var pnet = extractPNetParams();
    var rnet = extractRNetParams();
    var onet = extractONetParams();
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map