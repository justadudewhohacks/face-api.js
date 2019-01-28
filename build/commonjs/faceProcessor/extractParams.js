"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractFCParamsFactory(extractWeights, paramMappings);
    var fc = extractFCParams(channelsIn, channelsOut, 'fc');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { fc: fc }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map