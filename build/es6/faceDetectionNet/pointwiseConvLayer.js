import * as tf from '@tensorflow/tfjs-core';
export function pointwiseConvLayer(x, params, strides) {
    return tf.tidy(function () {
        var out = tf.conv2d(x, params.filters, strides, 'same');
        out = tf.add(out, params.batch_norm_offset);
        return tf.clipByValue(out, 0, 6);
    });
}
//# sourceMappingURL=pointwiseConvLayer.js.map