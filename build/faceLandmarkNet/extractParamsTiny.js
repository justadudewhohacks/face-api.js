"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var extractorsFactory_1 = require("./extractorsFactory");
function extractParamsTiny(weights) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory_1.extractorsFactory(extractWeights, paramMappings), extractDenseBlock3Params = _b.extractDenseBlock3Params, extractFCParams = _b.extractFCParams;
    var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
    var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
    var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
    var fc = extractFCParams(128, 136, 'fc');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { dense0: dense0, dense1: dense1, dense2: dense2, fc: fc }
    };
}
exports.extractParamsTiny = extractParamsTiny;
//# sourceMappingURL=extractParamsTiny.js.map