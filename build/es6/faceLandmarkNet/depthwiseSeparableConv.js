import * as tf from '@tensorflow/tfjs-core';
export function depthwiseSeparableConv(x, params, stride) {
    return tf.tidy(function () {
        var out = tf.separableConv2d(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
        out = tf.add(out, params.bias);
        return out;
    });
}
//# sourceMappingURL=depthwiseSeparableConv.js.map