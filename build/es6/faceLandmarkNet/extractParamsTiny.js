import { extractWeightsFactory } from 'tfjs-image-recognition-base';
import { extractorsFactory } from './extractorsFactory';
export function extractParamsTiny(weights) {
    var paramMappings = [];
    var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights, paramMappings), extractDenseBlock3Params = _b.extractDenseBlock3Params, extractFCParams = _b.extractFCParams;
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
//# sourceMappingURL=extractParamsTiny.js.map