"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = tfjs_tiny_yolov2_1.extractFCParamsFactory(extractWeights, paramMappings);
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