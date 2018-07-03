import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { Rect } from './Rect';
import { toNetInput } from './toNetInput';
import { TNetInput } from './types';
import { createCanvas, getContext2dOrThrow, imageTensorToCanvas } from './utils';
import * as tf from '@tensorflow/tfjs-core';

/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export async function extractFaces(
  input: TNetInput,
  detections: Array<FaceDetection | Rect>
): Promise<HTMLCanvasElement[]> {

  let canvas = input as HTMLCanvasElement

  if (!(input instanceof HTMLCanvasElement)) {
    const netInput = await toNetInput(input, true)

    if (netInput.batchSize > 1) {
      if (netInput.isManaged) {
        netInput.dispose()
      }
      throw new Error('extractFaces - batchSize > 1 not supported')
    }

    canvas = await imageTensorToCanvas(netInput.inputs[0])

    if (netInput.isManaged) {
      netInput.dispose()
    }
  }

  const ctx = getContext2dOrThrow(canvas)

  const boxes = detections.map(
    det => det instanceof FaceDetection
      ? det.forSize(canvas.width, canvas.height).getBox().floor()
      : det
  )
  return boxes.map(({ x, y, width, height }) => {
    const faceImg = createCanvas({ width, height })
    getContext2dOrThrow(faceImg)
      .putImageData(ctx.getImageData(x, y, width, height), 0, 0)
    return faceImg
  })
}