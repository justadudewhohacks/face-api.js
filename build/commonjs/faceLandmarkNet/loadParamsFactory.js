"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
function loadParamsFactory(weightMap, paramMappings) {
    var extractWeightEntry = tfjs_image_recognition_base_1.extractWeightEntryFactory(weightMap, paramMappings);
    function extractConvParams(prefix) {
        var filters = extractWeightEntry(prefix + "/filters", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { filters: filters, bias: bias };
    }
    function extractSeparableConvParams(prefix) {
        var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
        var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return new tfjs_tiny_yolov2_1.SeparableConvParams(depthwise_filter, pointwise_filter, bias);
    }
    function extractDenseBlock3Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var conv0 = isFirstLayer
            ? extractConvParams(prefix + "/conv0")
            : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        return { conv0: conv0, conv1: conv1, conv2: conv2 };
    }
    function extractDenseBlock4Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var conv0 = isFirstLayer
            ? extractConvParams(prefix + "/conv0")
            : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        var conv3 = extractSeparableConvParams(prefix + "/conv3");
        return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
    }
    function extractFcParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { weights: weights, bias: bias };
    }
    return {
        extractDenseBlock3Params: extractDenseBlock3Params,
        extractDenseBlock4Params: extractDenseBlock4Params,
        extractFcParams: extractFcParams
    };
}
exports.loadParamsFactory = loadParamsFactory;
//# sourceMappingURL=loadParamsFactory.js.map