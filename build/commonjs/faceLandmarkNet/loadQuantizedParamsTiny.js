"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var loadParamsFactory_1 = require("./loadParamsFactory");
var DEFAULT_MODEL_NAME = 'face_landmark_68_tiny_model';
function loadQuantizedParamsTiny(uri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, paramMappings, _a, extractDenseBlock3Params, extractFcParams, params;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, tfjs_image_recognition_base_1.loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    paramMappings = [];
                    _a = loadParamsFactory_1.loadParamsFactory(weightMap, paramMappings), extractDenseBlock3Params = _a.extractDenseBlock3Params, extractFcParams = _a.extractFcParams;
                    params = {
                        dense0: extractDenseBlock3Params('dense0', true),
                        dense1: extractDenseBlock3Params('dense1'),
                        dense2: extractDenseBlock3Params('dense2'),
                        fc: extractFcParams('fc')
                    };
                    tfjs_image_recognition_base_1.disposeUnusedWeightTensors(weightMap, paramMappings);
                    return [2 /*return*/, { params: params, paramMappings: paramMappings }];
            }
        });
    });
}
exports.loadQuantizedParamsTiny = loadQuantizedParamsTiny;
//# sourceMappingURL=loadQuantizedParamsTiny.js.map