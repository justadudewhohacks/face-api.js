import * as tf from '@tensorflow/tfjs-core';

import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { getImageTensor } from './getImageTensor';
import { NetInput } from './NetInput';
import { TNetInput } from './types';

/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Returned tensors have to be disposed manually once you don't need them anymore!
 * Useful if you want to compute the face descriptors for the face
 * images. Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
export function extractFaceTensors(
  image: tf.Tensor | NetInput | TNetInput,
  detections: FaceDetection[]
): tf.Tensor4D[] {
  return tf.tidy(() => {
    const imgTensor = getImageTensor(image)

    // TODO handle batches
    const [batchSize, imgHeight, imgWidth, numChannels] = imgTensor.shape

    const faceTensors = detections.map(det => {
      const { x, y, width, height } = det.forSize(imgWidth, imgHeight).getBox().floor()
      return tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels])
    })

    return faceTensors
  })
}