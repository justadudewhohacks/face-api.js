import { extractWeightsFactory } from 'tfjs-image-recognition-base';
import { extractFCParamsFactory } from 'tfjs-tiny-yolov2';
export function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
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