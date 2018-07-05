"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var extractWeightEntry_1 = require("../commons/extractWeightEntry");
var loadWeightMap_1 = require("../commons/loadWeightMap");
var DEFAULT_MODEL_NAME = 'face_landmark_68_model';
function extractorsFactory(weightMap, paramMappings) {
    function extractConvParams(prefix, mappedPrefix) {
        var filtersEntry = extractWeightEntry_1.extractWeightEntry(weightMap, prefix + "/kernel", 4);
        var biasEntry = extractWeightEntry_1.extractWeightEntry(weightMap, prefix + "/bias", 1);
        paramMappings.push({ originalPath: filtersEntry.path, paramPath: mappedPrefix + "/filters" }, { originalPath: biasEntry.path, paramPath: mappedPrefix + "/bias" });
        return {
            filters: filtersEntry.tensor,
            bias: biasEntry.tensor
        };
    }
    function extractFcParams(prefix, mappedPrefix) {
        var weightsEntry = extractWeightEntry_1.extractWeightEntry(weightMap, prefix + "/kernel", 2);
        var biasEntry = extractWeightEntry_1.extractWeightEntry(weightMap, prefix + "/bias", 1);
        paramMappings.push({ originalPath: weightsEntry.path, paramPath: mappedPrefix + "/weights" }, { originalPath: biasEntry.path, paramPath: mappedPrefix + "/bias" });
        return {
            weights: weightsEntry.tensor,
            bias: biasEntry.tensor
        };
    }
    return {
        extractConvParams: extractConvParams,
        extractFcParams: extractFcParams
    };
}
function loadQuantizedParams(uri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, paramMappings, _a, extractConvParams, extractFcParams, params;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadWeightMap_1.loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    paramMappings = [];
                    _a = extractorsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractFcParams = _a.extractFcParams;
                    params = {
                        conv0_params: extractConvParams('conv2d_0', 'conv0_params'),
                        conv1_params: extractConvParams('conv2d_1', 'conv1_params'),
                        conv2_params: extractConvParams('conv2d_2', 'conv2_params'),
                        conv3_params: extractConvParams('conv2d_3', 'conv3_params'),
                        conv4_params: extractConvParams('conv2d_4', 'conv4_params'),
                        conv5_params: extractConvParams('conv2d_5', 'conv5_params'),
                        conv6_params: extractConvParams('conv2d_6', 'conv6_params'),
                        conv7_params: extractConvParams('conv2d_7', 'conv7_params'),
                        fc0_params: extractFcParams('dense', 'fc0_params'),
                        fc1_params: extractFcParams('logits', 'fc1_params')
                    };
                    return [2 /*return*/, { params: params, paramMappings: paramMappings }];
            }
        });
    });
}
exports.loadQuantizedParams = loadQuantizedParams;
//# sourceMappingURL=loadQuantizedParams.js.map