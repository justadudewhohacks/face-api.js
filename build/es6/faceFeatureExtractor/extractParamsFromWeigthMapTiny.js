import { disposeUnusedWeightTensors } from 'tfjs-image-recognition-base';
import { loadParamsFactory } from './loadParamsFactory';
export function extractParamsFromWeigthMapTiny(weightMap) {
    var paramMappings = [];
    var extractDenseBlock3Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
    var params = {
        dense0: extractDenseBlock3Params('dense0', true),
        dense1: extractDenseBlock3Params('dense1'),
        dense2: extractDenseBlock3Params('dense2')
    };
    disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMapTiny.js.map