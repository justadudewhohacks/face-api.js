import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { FaceLandmarks68 } from '../faceLandmarkNet';
import { FaceLandmarks } from '../FaceLandmarks';
import { Point } from '../Point';
import { getContext2dOrThrow, resolveInput, round } from '../utils';
import { DrawBoxOptions, DrawLandmarksOptions, DrawOptions, DrawTextOptions } from './types';

export function getDefaultDrawOptions(): DrawOptions {
  return {
    color: 'blue',
    lineWidth: 2,
    fontSize: 20,
    fontStyle: 'Georgia'
  }
}

export function drawBox(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  options: DrawBoxOptions
) {
  const drawOptions = Object.assign(
    getDefaultDrawOptions(),
    (options || {})
  )

  ctx.strokeStyle = drawOptions.color
  ctx.lineWidth = drawOptions.lineWidth
  ctx.strokeRect(x, y, w, h)
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string,
  options: DrawTextOptions
) {
  const drawOptions = Object.assign(
    getDefaultDrawOptions(),
    (options || {})
  )

  const padText = 2 + drawOptions.lineWidth

  ctx.fillStyle = drawOptions.color
  ctx.font = `${drawOptions.fontSize}px ${drawOptions.fontStyle}`
  ctx.fillText(text, x + padText, y + padText + (drawOptions.fontSize * 0.6))
}

export function drawDetection(
  canvasArg: string | HTMLCanvasElement,
  detection: FaceDetection | FaceDetection[],
  options?: DrawBoxOptions & DrawTextOptions & { withScore: boolean }
) {
  const canvas = resolveInput(canvasArg)
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement')
  }

  const detectionArray = Array.isArray(detection)
    ? detection
    : [detection]

  detectionArray.forEach((det) => {
    const {
      x,
      y,
      width,
      height
    } = det.getBox()

    const drawOptions = Object.assign(
      getDefaultDrawOptions(),
      (options || {})
    )

    const { withScore } = Object.assign({ withScore: true }, (options || {}))

    const ctx = getContext2dOrThrow(canvas)
    drawBox(
      ctx,
      x,
      y,
      width,
      height,
      drawOptions
    )
    if (withScore) {
      drawText(
        ctx,
        x,
        y,
        `${round(det.getScore())}`,
        drawOptions
      )
    }
  })
}

function drawContour(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  isClosed: boolean = false
) {
  ctx.beginPath()

  points.slice(1).forEach(({ x, y }, prevIdx) => {
    const from = points[prevIdx]
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(x, y)
  })

  if (isClosed) {
    const from = points[points.length - 1]
    const to = points[0]
    if (!from || !to) {
      return
    }

    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
  }

  ctx.stroke()
}

export function drawLandmarks(
  canvasArg: string | HTMLCanvasElement,
  faceLandmarks: FaceLandmarks | FaceLandmarks[],
  options?: DrawLandmarksOptions & { drawLines: boolean }
) {
  const canvas = resolveInput(canvasArg)
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement')
  }

  const drawOptions = Object.assign(
    getDefaultDrawOptions(),
    (options || {})
  )

  const { drawLines } = Object.assign({ drawLines: false }, (options || {}))

  const ctx = getContext2dOrThrow(canvas)
  const { lineWidth, color } = drawOptions

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