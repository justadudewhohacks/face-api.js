"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings);
    function extractScaleLayerParams(prefix) {
        var weights = extractWeightEntry(prefix + "/scale/weights", 1);
        var biases = extractWeightEntry(prefix + "/scale/biases", 1);
        return { weights: weights, biases: biases };
    }
    function extractConvLayerParams(prefix) {
        var filters = extractWeightEntry(prefix + "/conv/filters", 4);
        var bias = extractWeightEntry(prefix + "/conv/bias", 1);
        var scale = extractScaleLayerParams(prefix);
        return { conv: { filters: filters, bias: bias }, scale: scale };
    }
    function extractResidualLayerParams(prefix) {
        return {
            conv1: extractConvLayerParams(prefix + "/conv1"),
            conv2: extractConvLayerParams(prefix + "/conv2")
        };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
    var conv32_down = extractConvLayerParams('conv32_down');
    var conv32_1 = extractResidualLayerParams('conv32_1');
    var conv32_2 = extractResidualLayerParams('conv32_2');
    var conv32_3 = extractResidualLayerParams('conv32_3');
    var conv64_down = extractResidualLayerParams('conv64_down');
    var conv64_1 = extractResidualLayerParams('conv64_1');
    var conv64_2 = extractResidualLayerParams('conv64_2');
    var conv64_3 = extractResidualLayerParams('conv64_3');
    var conv128_down = extractResidualLayerParams('conv128_down');
    var conv128_1 = extractResidualLayerParams('conv128_1');
    var conv128_2 = extractResidualLayerParams('conv128_2');
    var conv256_down = extractResidualLayerParams('conv256_down');
    var conv256_1 = extractResidualLayerParams('conv256_1');
    var conv256_2 = extractResidualLayerParams('conv256_2');
    var conv256_down_out = extractResidualLayerParams('conv256_down_out');
    var fc = weightMap['fc'];
    paramMappings.push({ originalPath: 'fc', paramPath: 'fc' });
    if (!tfjs_image_recognition_base_1.isTensor2D(fc)) {
        throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
    }
    var params = {
        conv32_down: conv32_down,
        conv32_1: conv32_1,
        conv32_2: conv32_2,
        conv32_3: conv32_3,
        conv64_down: conv64_down,
        conv64_1: conv64_1,
        conv64_2: conv64_2,
        conv64_3: conv64_3,
        conv128_down: conv128_down,
        conv128_1: conv128_1,
        conv128_2: conv128_2,
        conv256_down: conv256_down,
        conv256_1: conv256_1,
        conv256_2: conv256_2,
        conv256_down_out: conv256_down_out,
        fc: fc
    };
    tfjs_image_recognition_base_1.TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMap = extractParamsFromWeigthMap;
//# sourceMappingURL=extractParamsFromWeigthMap.js.map