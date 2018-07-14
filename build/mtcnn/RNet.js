"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var fullyConnectedLayer_1 = require("../faceLandmarkNet/fullyConnectedLayer");
var prelu_1 = require("./prelu");
var sharedLayers_1 = require("./sharedLayers");
function RNet(x, params) {
    return tf.tidy(function () {
        var convOut = sharedLayers_1.sharedLayer(x, params);
        var vectorized = tf.reshape(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
        var fc1 = fullyConnectedLayer_1.fullyConnectedLayer(vectorized, params.fc1);
        var prelu4 = prelu_1.prelu(fc1, params.prelu4_alpha);
        var fc2_1 = fullyConnectedLayer_1.fullyConnectedLayer(prelu4, params.fc2_1);
        var max = tf.expandDims(tf.max(fc2_1, 1), 1);
        var prob = tf.softmax(tf.sub(fc2_1, max), 1);
        var regions = fullyConnectedLayer_1.fullyConnectedLayer(prelu4, params.fc2_2);
        var scores = tf.unstack(prob, 1)[1];
        return { scores: scores, regions: regions };
    });
}
exports.RNet = RNet;
//# sourceMappingURL=RNet.js.map