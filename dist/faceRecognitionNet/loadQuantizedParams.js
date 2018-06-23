import * as tslib_1 from "tslib";
import { isTensor1D, isTensor2D, isTensor4D } from '../commons/isTensor';
import { loadWeightMap } from '../commons/loadWeightMap';
var DEFAULT_MODEL_NAME = 'face_recognition_model';
function extractorsFactory(weightMap) {
    function extractScaleLayerParams(prefix) {
        var params = {
            weights: weightMap[prefix + "/scale/weights"],
            biases: weightMap[prefix + "/scale/biases"]
        };
        if (!isTensor1D(params.weights)) {
            throw new Error("expected weightMap[" + prefix + "/scale/weights] to be a Tensor1D, instead have " + params.weights);
        }
        if (!isTensor1D(params.biases)) {
            throw new Error("expected weightMap[" + prefix + "/scale/biases] to be a Tensor1D, instead have " + params.biases);
        }
        return params;
    }
    function extractConvLayerParams(prefix) {
        var params = {
            filters: weightMap[prefix + "/conv/filters"],
            bias: weightMap[prefix + "/conv/bias"]
        };
        if (!isTensor4D(params.filters)) {
            throw new Error("expected weightMap[" + prefix + "/conv/filters] to be a Tensor1D, instead have " + params.filters);
        }
        if (!isTensor1D(params.bias)) {
            throw new Error("expected weightMap[" + prefix + "/conv/bias] to be a Tensor1D, instead have " + params.bias);
        }
        return {
            conv: params,
            scale: extractScaleLayerParams(prefix)
        };
    }
    function extractResidualLayerParams(prefix) {
        return {
            conv1: extractConvLayerParams(prefix + "/conv1"),
            conv2: extractConvLayerParams(prefix + "/conv2")
        };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
export function loadQuantizedParams(uri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var weightMap, _a, extractConvLayerParams, extractResidualLayerParams, conv32_down, conv32_1, conv32_2, conv32_3, conv64_down, conv64_1, conv64_2, conv64_3, conv128_down, conv128_1, conv128_2, conv256_down, conv256_1, conv256_2, conv256_down_out, fc;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                case 1:
                    weightMap = _b.sent();
                    _a = extractorsFactory(weightMap), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
                    conv32_down = extractConvLayerParams('conv32_down');
                    conv32_1 = extractResidualLayerParams('conv32_1');
                    conv32_2 = extractResidualLayerParams('conv32_2');
                    conv32_3 = extractResidualLayerParams('conv32_3');
                    conv64_down = extractResidualLayerParams('conv64_down');
                    conv64_1 = extractResidualLayerParams('conv64_1');
                    conv64_2 = extractResidualLayerParams('conv64_2');
                    conv64_3 = extractResidualLayerParams('conv64_3');
                    conv128_down = extractResidualLayerParams('conv128_down');
                    conv128_1 = extractResidualLayerParams('conv128_1');
                    conv128_2 = extractResidualLayerParams('conv128_2');
                    conv256_down = extractResidualLayerParams('conv256_down');
                    conv256_1 = extractResidualLayerParams('conv256_1');
                    conv256_2 = extractResidualLayerParams('conv256_2');
                    conv256_down_out = extractResidualLayerParams('conv256_down_out');
                    fc = weightMap['fc'];
                    if (!isTensor2D(fc)) {
                        throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
                    }
                    return [2 /*return*/, {
                            conv32_down: conv32_down,
                            conv32_1: conv32_1,
                            conv32_2: conv32_2,
                            conv32_3: conv32_3,
                            conv64_down: conv64_down,
                            conv64_1: conv64_1,
                            conv64_2: conv64_2,
                            conv64_3: conv64_3,
                            conv128_down: conv128_down,
                            conv128_1: conv128_1,
                            conv128_2: conv128_2,
                            conv256_down: conv256_down,
                            conv256_1: conv256_1,
                            conv256_2: conv256_2,
                            conv256_down_out: conv256_down_out,
                            fc: fc
                        }];
            }
        });
    });
}
//# sourceMappingURL=loadQuantizedParams.js.map