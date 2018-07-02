"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
/**
 * Pads the smaller dimension of an image tensor with zeros, such that width === height.
 *
 * @param imgTensor The image tensor.
 * @param isCenterImage (optional, default: false) If true, add padding on both sides of the image, such that the image.
 * @returns The padded tensor with width === height.
 */
function padToSquare(imgTensor, isCenterImage) {
    if (isCenterImage === void 0) { isCenterImage = false; }
    return tf.tidy(function () {
        var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
        if (height === width) {
            return imgTensor;
        }
        var dimDiff = Math.abs(height - width);
        var paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1));
        var paddingAxis = height > width ? 2 : 1;
        var createPaddingTensor = function (paddingAmount) {
            var paddingTensorShape = imgTensor.shape.slice();
            paddingTensorShape[paddingAxis] = paddingAmount;
            return tf.fill(paddingTensorShape, 0);
        };
        var paddingTensorAppend = createPaddingTensor(paddingAmount);
        var remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis];
        var paddingTensorPrepend = isCenterImage && remainingPaddingAmount
            ? createPaddingTensor(remainingPaddingAmount)
            : null;
        var tensorsToStack = [
            paddingTensorPrepend,
            imgTensor,
            paddingTensorAppend
        ]
            .filter(function (t) { return t !== null; });
        return tf.concat(tensorsToStack, paddingAxis);
    });
}
exports.padToSquare = padToSquare;
//# sourceMappingURL=padToSquare.js.map