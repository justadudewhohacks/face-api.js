"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
function tensorTo4D(input) {
    if (input.rank !== 3 && input.rank !== 4) {
        throw new Error('tensorTo4D - input tensor must be of rank 3 or 4');
    }
    return tf.tidy(function () { return input.rank === 3 ? input.expandDims(0) : input; });
}
exports.tensorTo4D = tensorTo4D;
//# sourceMappingURL=tensorTo4D.js.map