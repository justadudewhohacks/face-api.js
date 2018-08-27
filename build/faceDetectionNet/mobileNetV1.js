import * as tf from '@tensorflow/tfjs-core';
import { pointwiseConvLayer } from './pointwiseConvLayer';
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
export function mobileNetV1(x, params) {
    return tf.tidy(function () {
        var conv11 = null;
        var out = pointwiseConvLayer(x, params.conv_0, [2, 2]);
        var convPairParams = [
            params.conv_1,
            params.conv_2,
            params.conv_3,
            params.conv_4,
            params.conv_5,
            params.conv_6,
            params.conv_7,
            params.conv_8,
            params.conv_9,
            params.conv_10,
            params.conv_11,
            params.conv_12,
            params.conv_13
        ];
        convPairParams.forEach(function (param, i) {
            var layerIdx = i + 1;
            var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
            out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
            out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1]);
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
//# sourceMappingURL=mobileNetV1.js.map