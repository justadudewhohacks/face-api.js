import { TfjsImageRecognitionBase, range } from 'tfjs-image-recognition-base';
import { loadConvParamsFactory } from '../common/loadConvParamsFactory';
function loadParamsFactory(weightMap, paramMappings) {
    var extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings);
    var extractConvParams = loadConvParamsFactory(extractWeightEntry);
    var extractSeparableConvParams = TfjsImageRecognitionBase.loadSeparableConvParamsFactory(extractWeightEntry);
    function extractReductionBlockParams(mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
        var expansion_conv = extractConvParams(mappedPrefix + "/expansion_conv");
        return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
    }
    function extractMainBlockParams(mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
        var separable_conv2 = extractSeparableConvParams(mappedPrefix + "/separable_conv2");
        return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
    }
    return {
        extractConvParams: extractConvParams,
        extractSeparableConvParams: extractSeparableConvParams,
        extractReductionBlockParams: extractReductionBlockParams,
        extractMainBlockParams: extractMainBlockParams
    };
}
export function extractParamsFromWeigthMap(weightMap, numMainBlocks) {
    var paramMappings = [];
    var _a = loadParamsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractSeparableConvParams = _a.extractSeparableConvParams, extractReductionBlockParams = _a.extractReductionBlockParams, extractMainBlockParams = _a.extractMainBlockParams;
    var entry_flow_conv_in = extractConvParams('entry_flow/conv_in');
    var entry_flow_reduction_block_0 = extractReductionBlockParams('entry_flow/reduction_block_0');
    var entry_flow_reduction_block_1 = extractReductionBlockParams('entry_flow/reduction_block_1');
    var entry_flow = {
        conv_in: entry_flow_conv_in,
        reduction_block_0: entry_flow_reduction_block_0,
        reduction_block_1: entry_flow_reduction_block_1
    };
    var middle_flow = {};
    range(numMainBlocks, 0, 1).forEach(function (idx) {
        middle_flow["main_block_" + idx] = extractMainBlockParams("middle_flow/main_block_" + idx);
    });
    var exit_flow_reduction_block = extractReductionBlockParams('exit_flow/reduction_block');
    var exit_flow_separable_conv = extractSeparableConvParams('exit_flow/separable_conv');
    var exit_flow = {
        reduction_block: exit_flow_reduction_block,
        separable_conv: exit_flow_separable_conv
    };
    TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map