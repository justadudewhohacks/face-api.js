"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var disposeUnusedWeightTensors_1 = require("../commons/disposeUnusedWeightTensors");
var extractWeightEntryFactory_1 = require("../commons/extractWeightEntryFactory");
var loadWeightMap_1 = require("../commons/loadWeightMap");
var types_1 = require("./types");
var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = extractWeightEntryFactory_1.extractWeightEntryFactory(weightMap, paramMappings);
    function extractBatchNormParams(prefix) {
        var sub = extractWeightEntry(prefix + "/sub", 1);
        var truediv = extractWeightEntry(prefix + "/truediv", 1);
        return { sub: sub, truediv: truediv };
    }
    function extractConvParams(prefix) {
        var filters = extractWeightEntry(prefix + "/filters", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { filters: filters, bias: bias };
    }
    function extractConvWithBatchNormParams(prefix) {
        var conv = extractConvParams(prefix + "/conv");
        var bn = extractBatchNormParams(prefix + "/bn");
        return { conv: conv, bn: bn };
    }
    function extractSeparableConvParams(prefix) {
        var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
        var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return new types_1.SeparableConvParams(depthwise_filter, pointwise_filter, bias);
    }
    return {
        extractConvParams: extractConvParams,
        extractConvWithBatchNormParams: extractConvWithBatchNormParams,
        extractSeparableConvParams: extractSeparableConvParams
    };
}
function loadQuantizedParams(uri, withSeparableConvs) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, paramMappings, _a, extractConvParams, extractConvWithBatchNormParams, extractSeparableConvParams, extractConvFn, params;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadWeightMap_1.loadWeightMap(uri, withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    paramMappings = [];
                    _a = extractorsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractConvWithBatchNormParams = _a.extractConvWithBatchNormParams, extractSeparableConvParams = _a.extractSeparableConvParams;
                    extractConvFn = withSeparableConvs ? extractSeparableConvParams : extractConvWithBatchNormParams;
                    params = {
                        conv0: extractConvFn('conv0'),
                        conv1: extractConvFn('conv1'),
                        conv2: extractConvFn('conv2'),
                        conv3: extractConvFn('conv3'),
                        conv4: extractConvFn('conv4'),
                        conv5: extractConvFn('conv5'),
                        conv6: extractConvFn('conv6'),
                        conv7: extractConvFn('conv7'),
                        conv8: extractConvParams('conv8')
                    };
                    disposeUnusedWeightTensors_1.disposeUnusedWeightTensors(weightMap, paramMappings);
                    return [2 /*return*/, { params: params, paramMappings: paramMappings }];
            }
        });
    });
}
exports.loadQuantizedParams = loadQuantizedParams;
//# sourceMappingURL=loadQuantizedParams.js.map