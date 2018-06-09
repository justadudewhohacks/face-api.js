import { FaceDetectionNet } from './faceDetectionNet/types';
import { DrawBoxOptions, DrawTextOptions } from './types';

export function isFloat(num: number) {
  return num % 1 !== 0
}

export function round(num: number) {
  return Math.floor(num * 100) / 100
}

export function getElement(arg: string | any) {
  if (typeof arg === 'string') {
    return document.getElementById(arg)
  }
  return arg
}

export function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('canvas 2d context is null')
  }
  return ctx
}

export function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement) {
  if (media instanceof HTMLVideoElement) {
    return { width: media.videoWidth, height: media.videoHeight }
  }
  return media
}

export function bufferToImage(buf: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (!(buf instanceof Blob)) {
      return reject('bufferToImage - expected buf to be of type: Blob')
    }

    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = reader.result
    }
    reader.onerror = reject
    reader.readAsDataURL(buf)
  })
}

export function drawBox(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  options: DrawBoxOptions
) {
  ctx.strokeStyle = options.color
  ctx.lineWidth = options.lineWidth
  ctx.strokeRect(x, y, w, h)
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string,
  options: DrawTextOptions
) {
  ctx.fillStyle = options.color
  ctx.font = `${options.fontSize}px ${options.fontStyle}`
  ctx.fillText(text, x, y)
}

export function drawDetection(
  canvasArg: string | HTMLCanvasElement,
  detection: FaceDetectionNet.Detection | FaceDetectionNet.Detection[],
  options?: DrawBoxOptions & DrawTextOptions & { withScore: boolean }
) {
  const canvas = getElement(canvasArg)
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement')
  }

  const detectionArray = Array.isArray(detection)
    ? detection
    : [detection]

  detectionArray.forEach((det) => {
    const {
      score,
      box
    } = det

    const {
      left,
      right,
      top,
      bottom
    } = box

    const {
      color = 'blue',
      lineWidth = 2,
      fontSize = 20,
      fontStyle = 'Georgia',
      withScore = true
    } = (options || {})

    const padText = 2 + lineWidth

    const ctx = getContext2dOrThrow(canvas)
    drawBox(
      ctx,
      left,
      top,
      right - left,
      bottom - top,
      { lineWidth, color }
    )
    if (withScore) {
      drawText(
        ctx,
        left + padText,
        top + (fontSize * 0.6) + padText,
        `${round(score)}`,
        { fontSize, fontStyle, color }
      )
    }
  })
}