"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var pointwiseConvLayer_1 = require("./pointwiseConvLayer");
var epsilon = 0.0010000000474974513;
function depthwiseConvLayer(x, params, strides) {
    return tf.tidy(function () {
        var out = tf.depthwiseConv2d(x, params.filters, strides, 'same');
        out = tf.batchNormalization(out, params.batch_norm_mean, params.batch_norm_variance, epsilon, params.batch_norm_scale, params.batch_norm_offset);
        return tf.clipByValue(out, 0, 6);
    });
}
function getStridesForLayerIdx(layerIdx) {
    return [2, 4, 6, 12].some(function (idx) { return idx === layerIdx; }) ? [2, 2] : [1, 1];
}
function mobileNetV1(x, params) {
    return tf.tidy(function () {
        var conv11 = null;
        var out = pointwiseConvLayer_1.pointwiseConvLayer(x, params.conv_0_params, [2, 2]);
        params.conv_pair_params.forEach(function (param, i) {
            var layerIdx = i + 1;
            var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
            out = depthwiseConvLayer(out, param.depthwise_conv_params, depthwiseConvStrides);
            out = pointwiseConvLayer_1.pointwiseConvLayer(out, param.pointwise_conv_params, [1, 1]);
            if (layerIdx === 11) {
                conv11 = out;
            }
        });
        if (conv11 === null) {
            throw new Error('mobileNetV1 - output of conv layer 11 is null');
        }
        return {
            out: out,
            conv11: conv11
        };
    });
}
exports.mobileNetV1 = mobileNetV1;
//# sourceMappingURL=mobileNetV1.js.map