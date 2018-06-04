import * as tf from '@tensorflow/tfjs-core';

// TODO: hardcoded params
const resizedImageSize = [512, 512] as [number, number]
const weight = tf.scalar(0.007843137718737125)
const bias = tf.scalar(1)

export function resizeLayer(imgTensor: tf.Tensor4D) {
  const resizedImgs = tf.image.resizeBilinear(imgTensor, resizedImageSize, false)
  return tf.sub(tf.mul(resizedImgs, weight), bias)
}