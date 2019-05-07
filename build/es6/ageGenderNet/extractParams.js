import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export function extractParams(weights) {
    var paramMappings = [];
    var _a = TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = TfjsImageRecognitionBase.extractFCParamsFactory(extractWeights, paramMappings);
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
//# sourceMappingURL=extractParams.js.map