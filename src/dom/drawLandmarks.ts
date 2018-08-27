import { getContext2dOrThrow, getDefaultDrawOptions, resolveInput } from 'tfjs-image-recognition-base';

import { FaceLandmarks } from '../classes/FaceLandmarks';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { drawContour } from './drawContour';
import { DrawLandmarksOptions } from './types';

export function drawLandmarks(
  canvasArg: string | HTMLCanvasElement,
  faceLandmarks: FaceLandmarks | FaceLandmarks[],
  options?: DrawLandmarksOptions
) {
  const canvas = resolveInput(canvasArg)
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement')
  }

  const drawOptions = Object.assign(
    getDefaultDrawOptions(options),
    (options || {})
  )

  const { drawLines } = Object.assign({ drawLines: false }, (options || {}))

  const ctx = getContext2dOrThrow(canvas)
  const { lineWidth, color = 'blue' } = drawOptions

  const faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks]

  faceLandmarksArray.forEach(landmarks => {
    if (drawLines && landmarks instanceof FaceLandmarks68) {
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      drawContour(ctx, landmarks.getJawOutline())
      drawContour(ctx, landmarks.getLeftEyeBrow())
      drawContour(ctx, landmarks.getRightEyeBrow())
      drawContour(ctx, landmarks.getNose())
      drawContour(ctx, landmarks.getLeftEye(), true)
      drawContour(ctx, landmarks.getRightEye(), true)
      drawContour(ctx, landmarks.getMouth(), true)
      return
    }

    // else draw points
    const ptOffset = lineWidth / 2
    ctx.fillStyle = color
    landmarks.getPositions().forEach(pt => ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth))
  })
}