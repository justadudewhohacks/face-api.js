import * as tslib_1 from "tslib";
import { disposeUnusedWeightTensors, loadWeightMap } from 'tfjs-image-recognition-base';
import { loadParamsFactory } from './loadParamsFactory';
var DEFAULT_MODEL_NAME = 'face_landmark_68_model';
export function loadQuantizedParams(uri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, paramMappings, _a, extractDenseBlock4Params, extractFcParams, params;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    paramMappings = [];
                    _a = loadParamsFactory(weightMap, paramMappings), extractDenseBlock4Params = _a.extractDenseBlock4Params, extractFcParams = _a.extractFcParams;
                    params = {
                        dense0: extractDenseBlock4Params('dense0', true),
                        dense1: extractDenseBlock4Params('dense1'),
                        dense2: extractDenseBlock4Params('dense2'),
                        dense3: extractDenseBlock4Params('dense3'),
                        fc: extractFcParams('fc')
                    };
                    disposeUnusedWeightTensors(weightMap, paramMappings);
                    return [2 /*return*/, { params: params, paramMappings: paramMappings }];
            }
        });
    });
}
//# sourceMappingURL=loadQuantizedParams.js.map