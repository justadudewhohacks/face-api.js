"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var loadParamsFactory_1 = require("./loadParamsFactory");
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = loadParamsFactory_1.loadParamsFactory(weightMap, paramMappings), extractDenseBlock4Params = _a.extractDenseBlock4Params, extractFcParams = _a.extractFcParams;
    var params = {
        dense0: extractDenseBlock4Params('dense0', true),
        dense1: extractDenseBlock4Params('dense1'),
        dense2: extractDenseBlock4Params('dense2'),
        dense3: extractDenseBlock4Params('dense3'),
        fc: extractFcParams('fc')
    };
    tfjs_image_recognition_base_1.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMap = extractParamsFromWeigthMap;
//# sourceMappingURL=extractParamsFromWeigthMap.js.map