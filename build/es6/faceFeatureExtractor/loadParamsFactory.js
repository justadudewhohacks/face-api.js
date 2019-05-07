import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { loadConvParamsFactory } from '../common/loadConvParamsFactory';
export function loadParamsFactory(weightMap, paramMappings) {
    var extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings);
    var extractConvParams = loadConvParamsFactory(extractWeightEntry);
    var extractSeparableConvParams = TfjsImageRecognitionBase.loadSeparableConvParamsFactory(extractWeightEntry);
    function extractDenseBlock3Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var conv0 = isFirstLayer
            ? extractConvParams(prefix + "/conv0")
            : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        return { conv0: conv0, conv1: conv1, conv2: conv2 };
    }
    function extractDenseBlock4Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        var conv0 = isFirstLayer
            ? extractConvParams(prefix + "/conv0")
            : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        var conv3 = extractSeparableConvParams(prefix + "/conv3");
        return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
    }
    return {
        extractDenseBlock3Params: extractDenseBlock3Params,
        extractDenseBlock4Params: extractDenseBlock4Params
    };
}
//# sourceMappingURL=loadParamsFactory.js.map