"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function fullyConnectedLayer(x, params) {
    return tf.tidy(function () {
        return tf.add(tf.matMul(x, params.weights), params.bias);
    });
}
exports.fullyConnectedLayer = fullyConnectedLayer;
//# sourceMappingURL=fullyConnectedLayer.js.map