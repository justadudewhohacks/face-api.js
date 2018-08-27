import * as tf from '@tensorflow/tfjs-core';
import { extractWeightsFactory, isFloat } from 'tfjs-image-recognition-base';
function extractorsFactory(extractWeights, paramMappings) {
    function extractFilterValues(numFilterValues, numFilters, filterSize) {
        var weights = extractWeights(numFilterValues);
        var depth = weights.length / (numFilters * filterSize * filterSize);
        if (isFloat(depth)) {
            throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
        }
        return tf.tidy(function () { return tf.transpose(tf.tensor4d(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]); });
    }
    function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
        var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
        var bias = tf.tensor1d(extractWeights(numFilters));
        paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
        return { filters: filters, bias: bias };
    }
    function extractScaleLayerParams(numWeights, mappedPrefix) {
        var weights = tf.tensor1d(extractWeights(numWeights));
        var biases = tf.tensor1d(extractWeights(numWeights));
        paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/biases" });
        return {
            weights: weights,
            biases: biases
        };
    }
    function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
        var conv = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
        var scale = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
        return { conv: conv, scale: scale };
    }
    function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
        if (isDown === void 0) { isDown = false; }
        var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
        var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
        return { conv1: conv1, conv2: conv2 };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
export function extractParams(weights) {
    var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
    var conv32_down = extractConvLayerParams(4704, 32, 7, 'conv32_down');
    var conv32_1 = extractResidualLayerParams(9216, 32, 3, 'conv32_1');
    var conv32_2 = extractResidualLayerParams(9216, 32, 3, 'conv32_2');
    var conv32_3 = extractResidualLayerParams(9216, 32, 3, 'conv32_3');
    var conv64_down = extractResidualLayerParams(36864, 64, 3, 'conv64_down', true);
    var conv64_1 = extractResidualLayerParams(36864, 64, 3, 'conv64_1');
    var conv64_2 = extractResidualLayerParams(36864, 64, 3, 'conv64_2');
    var conv64_3 = extractResidualLayerParams(36864, 64, 3, 'conv64_3');
    var conv128_down = extractResidualLayerParams(147456, 128, 3, 'conv128_down', true);
    var conv128_1 = extractResidualLayerParams(147456, 128, 3, 'conv128_1');
    var conv128_2 = extractResidualLayerParams(147456, 128, 3, 'conv128_2');
    var conv256_down = extractResidualLayerParams(589824, 256, 3, 'conv256_down', true);
    var conv256_1 = extractResidualLayerParams(589824, 256, 3, 'conv256_1');
    var conv256_2 = extractResidualLayerParams(589824, 256, 3, 'conv256_2');
    var conv256_down_out = extractResidualLayerParams(589824, 256, 3, 'conv256_down_out');
    var fc = tf.tidy(function () { return tf.transpose(tf.tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0]); });
    paramMappings.push({ paramPath: "fc" });
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    var params = {
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
    };
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParams.js.map