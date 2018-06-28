import * as tf from '@tensorflow/tfjs-core';

import { isEven } from './utils';

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

    const dimDiff = Math.abs(height - width)
    const paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1))
    const paddingAxis = height > width ? 2 : 1

    const createPaddingTensor = (paddingAmount: number): tf.Tensor => {
      const paddingTensorShape = imgTensor.shape.slice()
      paddingTensorShape[paddingAxis] = paddingAmount
      return tf.fill(paddingTensorShape, 0)
    }

    const paddingTensorAppend = createPaddingTensor(paddingAmount)
    const remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis]

    const paddingTensorPrepend = isCenterImage && remainingPaddingAmount
      ? createPaddingTensor(remainingPaddingAmount)
      : null

    const tensorsToStack = [
      paddingTensorPrepend,
      imgTensor,
      paddingTensorAppend
    ]
      .filter(t => t !== null) as tf.Tensor4D[]
    return tf.concat(tensorsToStack, paddingAxis)
  })
}