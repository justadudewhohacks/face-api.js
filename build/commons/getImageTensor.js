"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var NetInput_1 = require("../NetInput");
var tensorTo4D_1 = require("./tensorTo4D");
function getImageTensor(input) {
    return tf.tidy(function () {
        if (input instanceof tf.Tensor) {
            return tensorTo4D_1.tensorTo4D(input);
        }
        if (!(input instanceof NetInput_1.NetInput)) {
            throw new Error('getImageTensor - expected input to be a tensor or an instance of NetInput');
        }
        if (input.canvases.length > 1) {
            throw new Error('getImageTensor - batch input is not accepted here');
        }
        return tf.fromPixels(input.canvases[0]).expandDims(0).toFloat();
    });
}
exports.getImageTensor = getImageTensor;
//# sourceMappingURL=getImageTensor.js.map