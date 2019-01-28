import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { extractorsFactory } from './extractorsFactory';
export function extractParamsTiny(weights) {
    var paramMappings = [];
    var _a = TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractDenseBlock3Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock3Params;
    var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
    var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
    var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { dense0: dense0, dense1: dense1, dense2: dense2 }
    };
}
//# sourceMappingURL=extractParamsTiny.js.map