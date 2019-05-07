"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function extractParams(weights) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractFCParamsFactory(extractWeights, paramMappings);
    var age = extractFCParams(512, 1, 'fc/age');
    var gender = extractFCParams(512, 2, 'fc/gender');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { fc: { age: age, gender: gender } }
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map