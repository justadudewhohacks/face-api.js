import * as tf from '@tensorflow/tfjs-core';
import { scale } from './scaleLayer';
function convLayer(x, params, stride, withRelu, padding) {
    if (padding === void 0) { padding = 'same'; }
    var _a = params.conv, filters = _a.filters, biases = _a.biases;
    var out = tf.conv2d(x, filters, [stride, stride], padding);
    out = tf.add(out, biases);
    out = scale(out, params.scale);
    return withRelu ? tf.relu(out) : out;
}
export function conv(x, params) {
    return convLayer(x, params, 1, true);
}
export function convNoRelu(x, params) {
    return convLayer(x, params, 1, false);
}
export function convDown(x, params) {
    return convLayer(x, params, 2, true, 'valid');
}
//# sourceMappingURL=convLayer.js.map