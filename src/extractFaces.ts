import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { Rect } from './Rect';
import { createCanvas, getContext2dOrThrow } from './utils';

/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export function extractFaces(
  image: HTMLCanvasElement,
  detections: Array<FaceDetection|Rect>
): HTMLCanvasElement[] {
  const ctx = getContext2dOrThrow(image)

  const boxes = detections.map(
    det => det instanceof FaceDetection
      ? det.forSize(image.width, image.height).getBox().floor()
      : det
  )
  return boxes.map(({ x, y, width, height }) => {
    const faceImg = createCanvas({ width, height })
    getContext2dOrThrow(faceImg)
      .putImageData(ctx.getImageData(x, y, width, height), 0, 0)
    return faceImg
  })
}