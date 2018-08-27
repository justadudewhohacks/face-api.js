import * as tf from '@tensorflow/tfjs-core';
import { scale } from './scaleLayer';
function convLayer(x, params, strides, withRelu, padding) {
    if (padding === void 0) { padding = 'same'; }
    var _a = params.conv, filters = _a.filters, bias = _a.bias;
    var out = tf.conv2d(x, filters, strides, padding);
    out = tf.add(out, bias);
    out = scale(out, params.scale);
    return withRelu ? tf.relu(out) : out;
}
export function conv(x, params) {
    return convLayer(x, params, [1, 1], true);
}
export function convNoRelu(x, params) {
    return convLayer(x, params, [1, 1], false);
}
export function convDown(x, params) {
    return convLayer(x, params, [2, 2], true, 'valid');
}
//# sourceMappingURL=convLayer.js.map