import * as tf from '@tensorflow/tfjs-core';

/**
 * Pads the smaller dimension of an image tensor with zeros, such that width === height.
 *
 * @param imgTensor The image tensor.
 * @param isCenterImage (optional, default: false) If true, add padding on both sides of the image, such that the image.
 * @returns The padded tensor with width === height.
 */
export function padToSquare(
  imgTensor: tf.Tensor4D,
  isCenterImage: boolean = false
): tf.Tensor4D {
  return tf.tidy(() => {

    const [height, width] = imgTensor.shape.slice(1)
    if (height === width) {
      return imgTensor
    }

    const paddingAmount = Math.floor(Math.abs(height - width) * (isCenterImage ? 0.5 : 1))
    const paddingAxis = height > width ? 2 : 1
    const paddingTensorShape = imgTensor.shape.slice() as [number, number, number, number]
    paddingTensorShape[paddingAxis] = paddingAmount

    const tensorsToStack = (isCenterImage ? [tf.fill(paddingTensorShape, 0)] : [])
      .concat([imgTensor,  tf.fill(paddingTensorShape, 0)]) as tf.Tensor4D[]
    return tf.concat(tensorsToStack, paddingAxis)
  })
}