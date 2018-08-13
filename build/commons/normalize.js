"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function normalize(x, meanRgb) {
    return tf.tidy(function () {
        var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
        var avg_r = tf.fill(x.shape.slice(0, 3).concat([1]), r);
        var avg_g = tf.fill(x.shape.slice(0, 3).concat([1]), g);
        var avg_b = tf.fill(x.shape.slice(0, 3).concat([1]), b);
        var avg_rgb = tf.concat([avg_r, avg_g, avg_b], 3);
        return tf.sub(x, avg_rgb);
    });
}
exports.normalize = normalize;
//# sourceMappingURL=normalize.js.map