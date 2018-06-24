"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var scaleLayer_1 = require("./scaleLayer");
function convLayer(x, params, strides, withRelu, padding) {
    if (padding === void 0) { padding = 'same'; }
    var _a = params.conv, filters = _a.filters, bias = _a.bias;
    var out = tf.conv2d(x, filters, strides, padding);
    out = tf.add(out, bias);
    out = scaleLayer_1.scale(out, params.scale);
    return withRelu ? tf.relu(out) : out;
}
function conv(x, params) {
    return convLayer(x, params, [1, 1], true);
}
exports.conv = conv;
function convNoRelu(x, params) {
    return convLayer(x, params, [1, 1], false);
}
exports.convNoRelu = convNoRelu;
function convDown(x, params) {
    return convLayer(x, params, [2, 2], true, 'valid');
}
exports.convDown = convDown;
//# sourceMappingURL=convLayer.js.map