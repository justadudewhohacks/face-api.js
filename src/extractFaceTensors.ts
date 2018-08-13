import * as tf from '@tensorflow/tfjs-core';

import { FaceDetection } from './FaceDetection';
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
  input: TNetInput,
  detections: Array<FaceDetection | Rect>
): Promise<tf.Tensor4D[]> {

  const netInput = await toNetInput(input, true)

  if (netInput.batchSize > 1) {
    if (netInput.isManaged) {
      netInput.dispose()
    }
    throw new Error('extractFaceTensors - batchSize > 1 not supported')
  }

  return tf.tidy(() => {
    const imgTensor = netInput.inputs[0].expandDims().toFloat() as tf.Tensor4D

    const [imgHeight, imgWidth, numChannels] = imgTensor.shape.slice(1)

    const boxes = detections.map(
      det => det instanceof FaceDetection
        ? det.forSize(imgWidth, imgHeight).getBox()
        : det
    )
      .map(box => box.clipAtImageBorders(imgWidth, imgHeight))

    const faceTensors = boxes.map(({ x, y, width, height }) =>
      tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels])
    )

    if (netInput.isManaged) {
      netInput.dispose()
    }
    return faceTensors
  })
}