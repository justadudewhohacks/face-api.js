"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var fullyConnectedLayer_1 = require("../common/fullyConnectedLayer");
var prelu_1 = require("./prelu");
var sharedLayers_1 = require("./sharedLayers");
function ONet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayers_1.sharedLayer(x, params);
        out = tf.maxPool(out, [2, 2], [2, 2], 'same');
        out = tfjs_tiny_yolov2_1.convLayer(out, params.conv4, 'valid');
        out = prelu_1.prelu(out, params.prelu4_alpha);
        var vectorized = tf.reshape(out, [out.shape[0], params.fc1.weights.shape[0]]);
        var fc1 = fullyConnectedLayer_1.fullyConnectedLayer(vectorized, params.fc1);
        var prelu5 = prelu_1.prelu(fc1, params.prelu5_alpha);
        var fc2_1 = fullyConnectedLayer_1.fullyConnectedLayer(prelu5, params.fc2_1);
        var max = tf.expandDims(tf.max(fc2_1, 1), 1);
        var prob = tf.softmax(tf.sub(fc2_1, max), 1);
        var regions = fullyConnectedLayer_1.fullyConnectedLayer(prelu5, params.fc2_2);
        var points = fullyConnectedLayer_1.fullyConnectedLayer(prelu5, params.fc2_3);
        var scores = tf.unstack(prob, 1)[1];
        return { scores: scores, regions: regions, points: points };
    });
}
exports.ONet = ONet;
//# sourceMappingURL=ONet.js.map