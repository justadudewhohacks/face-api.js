import { disposeUnusedWeightTensors } from 'tfjs-image-recognition-base';
import { loadParamsFactory } from './loadParamsFactory';
export function extractParamsFromWeigthMapTiny(weightMap) {
    var paramMappings = [];
    var _a = loadParamsFactory(weightMap, paramMappings), extractDenseBlock3Params = _a.extractDenseBlock3Params, extractFcParams = _a.extractFcParams;
    var params = {
        dense0: extractDenseBlock3Params('dense0', true),
        dense1: extractDenseBlock3Params('dense1'),
        dense2: extractDenseBlock3Params('dense2'),
        fc: extractFcParams('fc')
    };
    disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMapTiny.js.map