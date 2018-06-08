import { FaceDetectionNet } from './faceDetectionNet/types';

function getElement(arg: string | any) {
  if (typeof arg === 'string') {
    return document.getElementById(arg)
  }
  return arg
}

function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('canvas 2d context is null')
  }
  return ctx
}

function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement) {
  if (media instanceof HTMLVideoElement) {
    return { width: media.videoWidth, height: media.videoHeight }
  }
  return media
}

export function isFloat(num: number) {
  return num % 1 !== 0
}

export function round(num: number) {
  return Math.floor(num * 100) / 100
}

export type Dimensions = {
  width: number
  height: number
}

export function drawMediaToCanvas(
  canvasArg: string | HTMLCanvasElement,
  mediaArg: string | HTMLImageElement | HTMLVideoElement,
  dims?: Dimensions
): CanvasRenderingContext2D {
  const canvas = getElement(canvasArg)
  const media = getElement(mediaArg)

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('drawMediaToCanvas - expected canvas to be of type: HTMLCanvasElement')
  }
  if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement)) {
    throw new Error('drawMediaToCanvas - expected media to be of type: HTMLImageElement | HTMLVideoElement')
  }

  const { width, height } = dims || getMediaDimensions(media)
  canvas.width = width
  canvas.height = height

  const ctx = getContext2dOrThrow(canvas)
  ctx.drawImage(media, 0, 0, width, height)
  return ctx
}

export function mediaToImageData(media: HTMLImageElement | HTMLVideoElement, dims?: Dimensions): ImageData {
  if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement)) {
    throw new Error('mediaToImageData - expected media to be of type: HTMLImageElement | HTMLVideoElement')
  }

  const ctx = drawMediaToCanvas(document.createElement('canvas'), media)

  const { width, height } = dims || getMediaDimensions(media)
  return ctx.getImageData(0, 0, width, height)
}

export function mediaSrcToImageData(
  src: string | HTMLImageElement | HTMLVideoElement
): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    if (typeof src !== 'string') {
      if (!(src instanceof HTMLImageElement || src instanceof HTMLVideoElement)) {
        return reject('mediaSrcToImageData - expected src to be of type: string | HTMLImageElement | HTMLVideoElement')
      }
      return resolve(mediaToImageData(src))
    }

    const img = new Image()
    img.onload = () => resolve(mediaToImageData(img))
    img.onerror = reject
    img.src = src
  })
}

export function bufferToImgSrc(buf: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!(buf instanceof Blob)) {
      return reject('bufferToImgSrc - expected buf to be of type: Blob')
    }

    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(buf)
  })
}

export async function bufferToImageData(buf: Blob): Promise<ImageData> {
  if (!(buf instanceof Blob)) {
    throw new Error('bufferToImageData - expected buf to be of type: Blob')
  }
  return mediaSrcToImageData(await bufferToImgSrc(buf))
}

export type DrawBoxOptions = {
  lineWidth: number
  color: string
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

export type DrawTextOptions = {
  fontSize: number
  fontStyle: string
  color: string
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