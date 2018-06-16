import * as tf from '@tensorflow/tfjs-core';
export function convLayer(x, params, padding, withRelu) {
    if (padding === void 0) { padding = 'same'; }
    if (withRelu === void 0) { withRelu = false; }
    return tf.tidy(function () {
        var out = tf.add(tf.conv2d(x, params.filters, [1, 1], padding), params.bias);
        return withRelu ? tf.relu(out) : out;
    });
}
//# sourceMappingURL=convLayer.js.map