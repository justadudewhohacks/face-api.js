"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function normalize(x) {
    return tf.tidy(function () { return tf.mul(tf.sub(x, tf.scalar(127.5)), tf.scalar(0.0078125)); });
}
exports.normalize = normalize;
//# sourceMappingURL=normalize.js.map