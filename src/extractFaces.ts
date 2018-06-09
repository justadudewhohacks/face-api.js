import { FaceDetectionResult } from './faceDetectionNet/FaceDetectionResult';
import { createCanvas, getContext2dOrThrow } from './utils';

/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
export function extractFaces(
  image: HTMLCanvasElement,
  detections: FaceDetectionResult[]
): HTMLCanvasElement[] {
  const ctx = getContext2dOrThrow(image)

  return detections.map(det => {
    const { x, y, width, height } = det.forSize(image.width, image.height).box

    const faceImg = createCanvas({ width, height })
    getContext2dOrThrow(faceImg)
      .putImageData(ctx.getImageData(x, y, width, height), 0, 0)
    return faceImg
  })
}