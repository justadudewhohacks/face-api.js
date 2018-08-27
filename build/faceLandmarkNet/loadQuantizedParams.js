import * as tslib_1 from "tslib";
import { disposeUnusedWeightTensors, extractWeightEntryFactory, loadWeightMap, } from 'tfjs-image-recognition-base';
var DEFAULT_MODEL_NAME = 'face_landmark_68_model';
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
    function extractConvParams(prefix, mappedPrefix) {
        var filters = extractWeightEntry(prefix + "/kernel", 4, mappedPrefix + "/filters");
        var bias = extractWeightEntry(prefix + "/bias", 1, mappedPrefix + "/bias");
        return { filters: filters, bias: bias };
    }
    function extractFcParams(prefix, mappedPrefix) {
        var weights = extractWeightEntry(prefix + "/kernel", 2, mappedPrefix + "/weights");
        var bias = extractWeightEntry(prefix + "/bias", 1, mappedPrefix + "/bias");
        return { weights: weights, bias: bias };
    }
    return {
        extractConvParams: extractConvParams,
        extractFcParams: extractFcParams
    };
}
export function loadQuantizedParams(uri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, paramMappings, _a, extractConvParams, extractFcParams, params;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    paramMappings = [];
                    _a = extractorsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractFcParams = _a.extractFcParams;
                    params = {
                        conv0: extractConvParams('conv2d_0', 'conv0'),
                        conv1: extractConvParams('conv2d_1', 'conv1'),
                        conv2: extractConvParams('conv2d_2', 'conv2'),
                        conv3: extractConvParams('conv2d_3', 'conv3'),
                        conv4: extractConvParams('conv2d_4', 'conv4'),
                        conv5: extractConvParams('conv2d_5', 'conv5'),
                        conv6: extractConvParams('conv2d_6', 'conv6'),
                        conv7: extractConvParams('conv2d_7', 'conv7'),
                        fc0: extractFcParams('dense', 'fc0'),
                        fc1: extractFcParams('logits', 'fc1')
                    };
                    disposeUnusedWeightTensors(weightMap, paramMappings);
                    return [2 /*return*/, { params: params, paramMappings: paramMappings }];
            }
        });
    });
}
//# sourceMappingURL=loadQuantizedParams.js.map