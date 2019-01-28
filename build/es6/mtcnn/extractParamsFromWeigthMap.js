import * as tslib_1 from "tslib";
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings);
    function extractConvParams(prefix) {
        var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { filters: filters, bias: bias };
    }
    function extractFCParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return { weights: weights, bias: bias };
    }
    function extractPReluParams(paramPath) {
        return extractWeightEntry(paramPath, 1);
    }
    function extractSharedParams(prefix) {
        var conv1 = extractConvParams(prefix + "/conv1");
        var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
        var conv2 = extractConvParams(prefix + "/conv2");
        var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
        var conv3 = extractConvParams(prefix + "/conv3");
        var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
        return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
    }
    function extractPNetParams() {
        var sharedParams = extractSharedParams('pnet');
        var conv4_1 = extractConvParams('pnet/conv4_1');
        var conv4_2 = extractConvParams('pnet/conv4_2');
        return tslib_1.__assign({}, sharedParams, { conv4_1: conv4_1, conv4_2: conv4_2 });
    }
    function extractRNetParams() {
        var sharedParams = extractSharedParams('rnet');
        var fc1 = extractFCParams('rnet/fc1');
        var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
        var fc2_1 = extractFCParams('rnet/fc2_1');
        var fc2_2 = extractFCParams('rnet/fc2_2');
        return tslib_1.__assign({}, sharedParams, { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
    }
    function extractONetParams() {
        var sharedParams = extractSharedParams('onet');
        var conv4 = extractConvParams('onet/conv4');
        var prelu4_alpha = extractPReluParams('onet/prelu4_alpha');
        var fc1 = extractFCParams('onet/fc1');
        var prelu5_alpha = extractPReluParams('onet/prelu5_alpha');
        var fc2_1 = extractFCParams('onet/fc2_1');
        var fc2_2 = extractFCParams('onet/fc2_2');
        var fc2_3 = extractFCParams('onet/fc2_3');
        return tslib_1.__assign({}, sharedParams, { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
    }
    return {
        extractPNetParams: extractPNetParams,
        extractRNetParams: extractRNetParams,
        extractONetParams: extractONetParams
    };
}
export function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractPNetParams = _a.extractPNetParams, extractRNetParams = _a.extractRNetParams, extractONetParams = _a.extractONetParams;
    var pnet = extractPNetParams();
    var rnet = extractRNetParams();
    var onet = extractONetParams();
    TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map