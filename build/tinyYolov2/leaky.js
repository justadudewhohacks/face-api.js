"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function leaky(x) {
    return tf.tidy(function () {
        return tf.maximum(x, tf.mul(x, tf.scalar(0.10000000149011612)));
    });
}
exports.leaky = leaky;
//# sourceMappingURL=leaky.js.map