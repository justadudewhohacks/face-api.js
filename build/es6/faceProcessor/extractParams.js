import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = TfjsImageRecognitionBase.extractFCParamsFactory(extractWeights, paramMappings);
    var fc = extractFCParams(channelsIn, channelsOut, 'fc');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { fc: fc }
    };
}
//# sourceMappingURL=extractParams.js.map