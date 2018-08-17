"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var leaky_1 = require("./leaky");
var types_1 = require("./types");
function convWithBatchNorm(x, params) {
    return tf.tidy(function () {
        var out = tf.pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
        if (params instanceof types_1.SeparableConvParams) {
            out = tf.separableConv2d(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid');
            out = tf.add(out, params.bias);
        }
        else {
            out = tf.conv2d(out, params.conv.filters, [1, 1], 'valid');
            out = tf.sub(out, params.bn.sub);
            out = tf.mul(out, params.bn.truediv);
            out = tf.add(out, params.conv.bias);
        }
        return leaky_1.leaky(out);
    });
}
exports.convWithBatchNorm = convWithBatchNorm;
//# sourceMappingURL=convWithBatchNorm.js.map