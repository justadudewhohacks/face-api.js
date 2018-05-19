import * as tf from '@tensorflow/tfjs-core';
function scale(x, params) {
    return tf.add(tf.mul(x, params.weights), params.biases);
}
function convLayer(x, params, stride, withRelu, padding) {
    if (padding === void 0) { padding = 'same'; }
    var _a = params.conv, filters = _a.filters, biases = _a.biases;
    var out = tf.conv2d(x, filters, [stride, stride], padding);
    out = tf.add(out, biases);
    out = scale(out, params.scale);
    return withRelu ? tf.relu(out) : out;
}
function conv(x, params) {
    return convLayer(x, params, 1, true);
}
function convNoRelu(x, params) {
    return convLayer(x, params, 1, false);
}
function convDown(x, params) {
    return convLayer(x, params, 2, true, 'valid');
}
function res(x, params) {
    var out = conv(x, params.conv1);
    out = convNoRelu(out, params.conv2);
    out = tf.add(out, x);
    out = tf.relu(out);
    return out;
}
function resDown(x, params) {
    var out = convDown(x, params.conv1);
    out = convNoRelu(out, params.conv2);
    var pooled = tf.avgPool(x, 2, 2, 'valid');
    var zeros = tf.zeros(pooled.shape);
    var isPad = pooled.shape[3] !== out.shape[3];
    var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
    if (isAdjustShape) {
        var padShapeX = out.shape.slice();
        padShapeX[1] = 1;
        var zerosW = tf.zeros(padShapeX);
        out = tf.concat([out, zerosW], 1);
        var padShapeY = out.shape.slice();
        padShapeY[2] = 1;
        var zerosH = tf.zeros(padShapeY);
        out = tf.concat([out, zerosH], 2);
    }
    pooled = isPad ? tf.concat([pooled, zeros], 3) : pooled;
    out = tf.add(pooled, out);
    out = tf.relu(out);
    return out;
}
function normalize(arr) {
    var avg_r = 122.782;
    var avg_g = 117.001;
    var avg_b = 104.298;
    var avgs = [avg_r, avg_g, avg_b];
    return arr.map(function (val, i) {
        var avg = avgs[i % 3];
        return (val - avg) / 256;
    });
}
function computeFaceDescriptor(input, params) {
    var x = tf.tensor4d(normalize(input), [1, 150, 150, 3]);
    var out = convDown(x, params.conv32_in);
    out = tf.maxPool(out, 3, 2, 'valid');
    out = res(out, params.conv32_1);
    out = res(out, params.conv32_2);
    out = res(out, params.conv32_3);
    out = resDown(out, params.conv64_in);
    out = res(out, params.conv64_1);
    out = res(out, params.conv64_2);
    out = res(out, params.conv64_3);
    out = resDown(out, params.conv128_in);
    out = res(out, params.conv128_1);
    out = res(out, params.conv128_2);
    out = resDown(out, params.conv256_in);
    out = res(out, params.conv256_1);
    out = res(out, params.conv256_2);
    out = resDown(out, params.conv256_3);
    // global average pooling of each of the 256 filters -> retrieve 256 entry vector
    var global_avg = out.mean([1, 2]);
    // fully connected
    // TODO: kind of slow here
    return Array.from(tf.matMul(global_avg, params.fc).dataSync());
}
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
    function extractConvBlockParams(numFilterValues, numFilters, filterSize) {
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
    function extractResBlockParams(numFilterValues, numFilters, filterSize, isInBlock) {
        if (isInBlock === void 0) { isInBlock = false; }
        var conv1 = extractConvBlockParams((isInBlock ? 0.5 : 1) * numFilterValues, numFilters, filterSize);
        var conv2 = extractConvBlockParams(numFilterValues, numFilters, filterSize);
        return {
            conv1: conv1,
            conv2: conv2
        };
    }
    return {
        extractConvBlockParams: extractConvBlockParams,
        extractResBlockParams: extractResBlockParams
    };
}
function extractParams(weights) {
    var extractWeights = function (numWeights) {
        var ret = weights.slice(0, numWeights);
        weights = weights.slice(numWeights);
        return ret;
    };
    var _a = extractorsFactory(extractWeights), extractConvBlockParams = _a.extractConvBlockParams, extractResBlockParams = _a.extractResBlockParams;
    var conv32_in = extractConvBlockParams(4704, 32, 7);
    var conv32_1 = extractResBlockParams(9216, 32, 3);
    var conv32_2 = extractResBlockParams(9216, 32, 3);
    var conv32_3 = extractResBlockParams(9216, 32, 3);
    var conv64_in = extractResBlockParams(36864, 64, 3, true);
    var conv64_1 = extractResBlockParams(36864, 64, 3);
    var conv64_2 = extractResBlockParams(36864, 64, 3);
    var conv64_3 = extractResBlockParams(36864, 64, 3);
    var conv128_in = extractResBlockParams(147456, 128, 3, true);
    var conv128_1 = extractResBlockParams(147456, 128, 3);
    var conv128_2 = extractResBlockParams(147456, 128, 3);
    var conv256_in = extractResBlockParams(589824, 256, 3, true);
    var conv256_1 = extractResBlockParams(589824, 256, 3);
    var conv256_2 = extractResBlockParams(589824, 256, 3);
    var conv256_3 = extractResBlockParams(589824, 256, 3);
    var fc = tf.transpose(tf.tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0]);
    if (weights.length !== 0) {
        throw new Error("weights remaing after extract: " + weights.length);
    }
    return {
        conv32_in: conv32_in,
        conv32_1: conv32_1,
        conv32_2: conv32_2,
        conv32_3: conv32_3,
        conv64_in: conv64_in,
        conv64_1: conv64_1,
        conv64_2: conv64_2,
        conv64_3: conv64_3,
        conv128_in: conv128_in,
        conv128_1: conv128_1,
        conv128_2: conv128_2,
        conv256_in: conv256_in,
        conv256_1: conv256_1,
        conv256_2: conv256_2,
        conv256_3: conv256_3,
        fc: fc
    };
}
export function faceRecognitionNet(weights) {
    var params = extractParams(weights);
    return function (input) {
        return computeFaceDescriptor(input, params);
    };
}
//# sourceMappingURL=faceRecognitionNet.js.map