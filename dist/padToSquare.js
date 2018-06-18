import * as tf from '@tensorflow/tfjs-core';
/**
 * Pads the smaller dimension of an image tensor with zeros, such that width === height.
 *
 * @param imgTensor The image tensor.
 * @param isCenterImage (optional, default: false) If true, add padding on both sides of the image, such that the image.
 * @returns The padded tensor with width === height.
 */
export function padToSquare(imgTensor, isCenterImage) {
    if (isCenterImage === void 0) { isCenterImage = false; }
    return tf.tidy(function () {
        var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
        if (height === width) {
            return imgTensor;
        }
        var paddingAmount = Math.floor(Math.abs(height - width) * (isCenterImage ? 0.5 : 1));
        var paddingAxis = height > width ? 2 : 1;
        var paddingTensorShape = imgTensor.shape.slice();
        paddingTensorShape[paddingAxis] = paddingAmount;
        var tensorsToStack = (isCenterImage ? [tf.fill(paddingTensorShape, 0)] : [])
            .concat([imgTensor, tf.fill(paddingTensorShape, 0)]);
        return tf.concat(tensorsToStack, paddingAxis);
    });
}
//# sourceMappingURL=padToSquare.js.map