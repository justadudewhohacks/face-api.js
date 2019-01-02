"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var depthwiseSeparableConv_1 = require("./depthwiseSeparableConv");
function denseBlock3(x, denseBlockParams, isFirstLayer) {
    if (isFirstLayer === void 0) { isFirstLayer = false; }
    return tf.tidy(function () {
        var out1 = tf.relu(isFirstLayer
            ? tf.add(tf.conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
            : depthwiseSeparableConv_1.depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
        var out2 = depthwiseSeparableConv_1.depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
        var in3 = tf.relu(tf.add(out1, out2));
        var out3 = depthwiseSeparableConv_1.depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
        return tf.relu(tf.add(out1, tf.add(out2, out3)));
    });
}
exports.denseBlock3 = denseBlock3;
function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
    if (isFirstLayer === void 0) { isFirstLayer = false; }
    if (isScaleDown === void 0) { isScaleDown = true; }
    return tf.tidy(function () {
        var out1 = tf.relu(isFirstLayer
            ? tf.add(tf.conv2d(x, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], 'same'), denseBlockParams.conv0.bias)
            : depthwiseSeparableConv_1.depthwiseSeparableConv(x, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
        var out2 = depthwiseSeparableConv_1.depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
        var in3 = tf.relu(tf.add(out1, out2));
        var out3 = depthwiseSeparableConv_1.depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
        var in4 = tf.relu(tf.add(out1, tf.add(out2, out3)));
        var out4 = depthwiseSeparableConv_1.depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
        return tf.relu(tf.add(out1, tf.add(out2, tf.add(out3, out4))));
    });
}
exports.denseBlock4 = denseBlock4;
//# sourceMappingURL=denseBlock.js.map