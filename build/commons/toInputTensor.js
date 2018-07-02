"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var NetInput_1 = require("../NetInput");
var padToSquare_1 = require("../padToSquare");
var tensorTo4D_1 = require("./tensorTo4D");
function toInputTensor(input, inputSize, center) {
    if (center === void 0) { center = true; }
    if (!(input instanceof tf.Tensor) && !(input instanceof NetInput_1.NetInput)) {
        throw new Error('toInputTensor - expected input to be a tensor of an instance of NetInput');
    }
    return tf.tidy(function () {
        var inputTensors = input instanceof NetInput_1.NetInput
            ? input.canvases.map(function (c) { return tf.expandDims(tf.fromPixels(c)); })
            : [tensorTo4D_1.tensorTo4D(input)];
        var preprocessedTensors = [];
        var batchInfo = [];
        inputTensors.forEach(function (inputTensor) {
            var _a = inputTensor.shape.slice(1), originalHeight = _a[0], originalWidth = _a[1];
            var imgTensor = padToSquare_1.padToSquare(inputTensor.toFloat(), center);
            var _b = imgTensor.shape.slice(1), heightAfterPadding = _b[0], widthAfterPadding = _b[1];
            if (heightAfterPadding !== inputSize || widthAfterPadding !== inputSize) {
                imgTensor = tf.image.resizeBilinear(imgTensor, [inputSize, inputSize]);
            }
            preprocessedTensors.push(imgTensor);
            batchInfo.push({
                originalWidth: originalWidth,
                originalHeight: originalHeight,
                paddingX: widthAfterPadding - originalWidth,
                paddingY: heightAfterPadding - originalHeight
            });
        });
        var batchSize = inputTensors.length;
        return {
            batchTensor: tf.stack(preprocessedTensors).as4D(batchSize, inputSize, inputSize, 3),
            batchInfo: batchInfo
        };
    });
}
exports.toInputTensor = toInputTensor;
//# sourceMappingURL=toInputTensor.js.map