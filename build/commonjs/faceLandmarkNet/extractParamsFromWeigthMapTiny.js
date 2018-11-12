"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var loadParamsFactory_1 = require("./loadParamsFactory");
function extractParamsFromWeigthMapTiny(weightMap) {
    var paramMappings = [];
    var _a = loadParamsFactory_1.loadParamsFactory(weightMap, paramMappings), extractDenseBlock3Params = _a.extractDenseBlock3Params, extractFcParams = _a.extractFcParams;
    var params = {
        dense0: extractDenseBlock3Params('dense0', true),
        dense1: extractDenseBlock3Params('dense1'),
        dense2: extractDenseBlock3Params('dense2'),
        fc: extractFcParams('fc')
    };
    tfjs_image_recognition_base_1.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
exports.extractParamsFromWeigthMapTiny = extractParamsFromWeigthMapTiny;
//# sourceMappingURL=extractParamsFromWeigthMapTiny.js.map