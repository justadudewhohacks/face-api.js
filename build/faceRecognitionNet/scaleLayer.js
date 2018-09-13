"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function scale(x, params) {
    return tf.add(tf.mul(x, params.weights), params.biases);
}
exports.scale = scale;
//# sourceMappingURL=scaleLayer.js.map