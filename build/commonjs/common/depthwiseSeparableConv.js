"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function depthwiseSeparableConv(x, params, stride) {
    return tf.tidy(function () {
        var out = tf.separableConv2d(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
        out = tf.add(out, params.bias);
        return out;
    });
}
exports.depthwiseSeparableConv = depthwiseSeparableConv;
//# sourceMappingURL=depthwiseSeparableConv.js.map