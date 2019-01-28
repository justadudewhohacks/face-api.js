import { extractorsFactory } from './extractorsFactory';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export function extractParams(weights) {
    var paramMappings = [];
    var _a = TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractDenseBlock4Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock4Params;
    var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
    var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
    var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
    var dense3 = extractDenseBlock4Params(128, 256, 'dense3');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: { dense0: dense0, dense1: dense1, dense2: dense2, dense3: dense3 }
    };
}
//# sourceMappingURL=extractParams.js.map