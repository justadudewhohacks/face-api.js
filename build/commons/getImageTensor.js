"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var NetInput_1 = require("../NetInput");
function getImageTensor(input) {
    return tf.tidy(function () {
        if (input instanceof tf.Tensor) {
            var rank = input.shape.length;
            if (rank !== 3 && rank !== 4) {
                throw new Error('input tensor must be of rank 3 or 4');
            }
            return (rank === 3 ? input.expandDims(0) : input).toFloat();
        }
        if (!(input instanceof NetInput_1.NetInput)) {
            throw new Error('getImageTensor - expected input to be a tensor or an instance of NetInput');
        }
        return tf.concat(input.canvases.map(function (canvas) {
            return tf.fromPixels(canvas).expandDims(0).toFloat();
        }));
    });
}
exports.getImageTensor = getImageTensor;
//# sourceMappingURL=getImageTensor.js.map