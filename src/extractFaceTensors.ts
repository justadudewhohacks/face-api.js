import * as tf from '@tensorflow/tfjs-core';

import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { getImageTensor } from './getImageTensor';
import { NetInput } from './NetInput';
import { Rect } from './Rect';
import { TNetInput } from './types';

/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Useful if you want to compute the face descriptors for the face images.
 * Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
export function extractFaceTensors(
  image: tf.Tensor | NetInput | TNetInput,
  detections: Array<FaceDetection|Rect>
): tf.Tensor4D[] {
  return tf.tidy(() => {
    const imgTensor = getImageTensor(image)

    // TODO handle batches
    const [batchSize, imgHeight, imgWidth, numChannels] = imgTensor.shape

    const boxes = detections.map(
      det => det instanceof FaceDetection
        ? det.forSize(imgWidth, imgHeight).getBox().floor()
        : det
    )
    const faceTensors = boxes.map(({ x, y, width, height }) =>
      tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels])
    )

    return faceTensors
  })
}