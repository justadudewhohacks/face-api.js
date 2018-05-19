import * as tf from '@tensorflow/tfjs-core';
function isFloat(num) {
    return num % 1 !== 0;
}
function extractorsFactory(extractWeights) {
    function extractFilterValues(numFilterValues, numFilters, filterSize) {
        var weights = extractWeights(numFilterValues);
        var depth = weights.length / (numFilters * filterSize * filterSize);
        if (isFloat(depth)) {
            throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
        }
        return tf.transpose(tf.tensor4d(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]);
    }
    function extractScaleLayerParams(numWeights) {
        var weights = tf.tensor1d(extractWeights(numWeights));
        var biases = tf.tensor1d(extractWeights(numWeights));
        return {
            weights: weights,
            biases: biases
        };
    }
    function extractConvLayerParams(numFilterValues, numFilters, filterSize) {
        var conv_filters = extractFilterValues(numFilterValues, numFilters, filterSize);
        var conv_biases = tf.tensor1d(extractWeights(numFilters));
        var scale = extractScaleLayerParams(numFilters);
        return {
            conv: {
                filters: conv_filters,
                biases: conv_biases
            },
            scale: scale
        };
    }
    function extractResidualLayerParams(numFilterValues, numFilters, filterSize, isDown) {
        if (isDown === void 0) { isDown = false; }
        var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize);
        var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize);
        return {
            conv1: conv1,
            conv2: conv2
        };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
export function extractParams(weights) {
    var extractWeights = function (numWeights) {
        var ret = weights.slice(0, numWeights);
        weights = weights.slice(numWeights);
        return ret;
    };
    var _a = extractorsFactory(extractWeights), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
    var conv32_down = extractConvLayerParams(4704, 32, 7);
    var conv32_1 = extractResidualLayerParams(9216, 32, 3);
    var conv32_2 = extractResidualLayerParams(9216, 32, 3);
    var conv32_3 = extractResidualLayerParams(9216, 32, 3);
    var conv64_down = extractResidualLayerParams(36864, 64, 3, true);
    var conv64_1 = extractResidualLayerParams(36864, 64, 3);
    var conv64_2 = extractResidualLayerParams(36864, 64, 3);
    var conv64_3 = extractResidualLayerParams(36864, 64, 3);
    var conv128_down = extractResidualLayerParams(147456, 128, 3, true);
    var conv128_1 = extractResidualLayerParams(147456, 128, 3);
    var conv128_2 = extractResidualLayerParams(147456, 128, 3);
    var conv256_down = extractResidualLayerParams(589824, 256, 3, true);
    var conv256_1 = extractResidualLayerParams(589824, 256, 3);
    var conv256_2 = extractResidualLayerParams(589824, 256, 3);
    var conv256_down_out = extractResidualLayerParams(589824, 256, 3);
    var fc = tf.transpose(tf.tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0]);
    if (weights.length !== 0) {
        throw new Error("weights remaing after extract: " + weights.length);
    }
    return {
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
}
//# sourceMappingURL=extractParams.js.map