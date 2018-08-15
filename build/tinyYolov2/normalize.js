"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function normalize(x) {
    return tf.tidy(function () {
        var avg_r = tf.fill(x.shape.slice(0, 3).concat([1]), 117.001);
        var avg_g = tf.fill(x.shape.slice(0, 3).concat([1]), 114.697);
        var avg_b = tf.fill(x.shape.slice(0, 3).concat([1]), 97.404);
        var avg_rgb = tf.concat([avg_r, avg_g, avg_b], 3);
        return tf.sub(x, avg_rgb);
    });
}
exports.normalize = normalize;
//# sourceMappingURL=normalize.js.map