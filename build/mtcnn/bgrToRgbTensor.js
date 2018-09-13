"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function bgrToRgbTensor(tensor) {
    return tf.tidy(function () { return tf.stack(tf.unstack(tensor, 3).reverse(), 3); });
}
exports.bgrToRgbTensor = bgrToRgbTensor;
//# sourceMappingURL=bgrToRgbTensor.js.map