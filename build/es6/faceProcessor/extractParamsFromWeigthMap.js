import { disposeUnusedWeightTensors, extractWeightEntryFactory } from 'tfjs-image-recognition-base';
export function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
    function extractFcParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { weights: weights, bias: bias };
    }
    var params = {
        fc: extractFcParams('fc')
    };
    disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map