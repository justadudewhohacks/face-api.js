import { disposeUnusedWeightTensors } from 'tfjs-image-recognition-base';
import { loadParamsFactory } from './loadParamsFactory';
export function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = loadParamsFactory(weightMap, paramMappings), extractDenseBlock4Params = _a.extractDenseBlock4Params, extractFcParams = _a.extractFcParams;
    var params = {
        dense0: extractDenseBlock4Params('dense0', true),
        dense1: extractDenseBlock4Params('dense1'),
        dense2: extractDenseBlock4Params('dense2'),
        dense3: extractDenseBlock4Params('dense3'),
        fc: extractFcParams('fc')
    };
    disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map