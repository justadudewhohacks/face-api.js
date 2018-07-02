import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../NetInput';
import { padToSquare } from '../padToSquare';
import { tensorTo4D } from './tensorTo4D';
import { BatchReshapeInfo } from './types';

export function toInputTensor(
  input: tf.Tensor | tf.Tensor[] | NetInput,
  inputSize: number,
  center: boolean = true
): { batchTensor: tf.Tensor4D, batchInfo: BatchReshapeInfo[] } {

  if (!(input instanceof tf.Tensor) && !(input instanceof NetInput)) {
    throw new Error('toInputTensor - expected input to be a tensor of an instance of NetInput')
  }

  return tf.tidy(() => {

    const inputTensors = input instanceof NetInput
      ? input.canvases.map(c => tf.expandDims(tf.fromPixels(c)))
      : [tensorTo4D(input)]

    const preprocessedTensors: tf.Tensor4D[] = []
    const batchInfo: BatchReshapeInfo[] = []

    inputTensors.forEach((inputTensor: tf.Tensor4D) => {
      const [originalHeight, originalWidth] = inputTensor.shape.slice(1)

      let imgTensor = padToSquare(inputTensor.toFloat(), center)
      const [heightAfterPadding, widthAfterPadding] = imgTensor.shape.slice(1)

      if (heightAfterPadding !== inputSize || widthAfterPadding !== inputSize) {
        imgTensor = tf.image.resizeBilinear(imgTensor, [inputSize, inputSize])
      }

      preprocessedTensors.push(imgTensor)
      batchInfo.push({
        originalWidth,
        originalHeight,
        paddingX: widthAfterPadding - originalWidth,
        paddingY: heightAfterPadding - originalHeight
      })
    })

    const batchSize = inputTensors.length

    return {
      batchTensor: tf.stack(preprocessedTensors).as4D(batchSize, inputSize, inputSize, 3),
      batchInfo
    }
  })
}