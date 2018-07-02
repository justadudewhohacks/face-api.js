import * as tf from '@tensorflow/tfjs-core';

import { getImageTensor } from './commons/getImageTensor';
import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { NetInput } from './NetInput';
import { Rect } from './Rect';
import { toNetInput } from './toNetInput';
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
export async function extractFaceTensors(
  input: tf.Tensor | NetInput | TNetInput,
  detections: Array<FaceDetection|Rect>
): Promise<tf.Tensor4D[]> {

  const image = input instanceof tf.Tensor
    ? input
    : await toNetInput(input)

  return tf.tidy(() => {
    const imgTensor = getImageTensor(image)

    const [imgHeight, imgWidth, numChannels] = imgTensor.shape.slice(1)

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