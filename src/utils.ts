import * as tf from '@tensorflow/tfjs-core';

import { isTensor4D } from './commons/isTensor';
import { Dimensions } from './types';

export function isFloat(num: number) {
  return num % 1 !== 0
}

export function isEven(num: number) {
  return num % 2 === 0
}

export function round(num: number) {
  return Math.floor(num * 100) / 100
}

export function sigmoid(x: number) {
  return 1 / (1 + Math.exp(-x))
}

export function isDimensions(obj: any): boolean {
  return obj && obj.width && obj.height
}

export function resolveInput(arg: string | any) {
  if (typeof arg === 'string') {
    return document.getElementById(arg)
  }
  return arg
}

export function isLoaded(media: HTMLImageElement | HTMLVideoElement) : boolean {
  return (media instanceof HTMLImageElement && media.complete)
    || (media instanceof HTMLVideoElement && media.readyState >= 3)
}

export function awaitMediaLoaded(media: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement) {
  return new Promise((resolve, reject) => {
    if (media instanceof HTMLCanvasElement || isLoaded(media)) {
      return resolve()
    }

    function onLoad(e: Event) {
      if (!e.currentTarget) return
      e.currentTarget.removeEventListener('load', onLoad)
      e.currentTarget.removeEventListener('error', onError)
      resolve()
    }

    function onError(e: Event) {
      if (!e.currentTarget) return
      e.currentTarget.removeEventListener('load', onLoad)
      e.currentTarget.removeEventListener('error', onError)
      reject()
    }

    media.addEventListener('load', onLoad)
    media.addEventListener('error', onError)
  })
}

export function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('canvas 2d context is null')
  }
  return ctx
}

export function createCanvas({ width, height }: Dimensions): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function createCanvasFromMedia(media: HTMLImageElement | HTMLVideoElement, dims?: Dimensions): HTMLCanvasElement {
  if (!isLoaded(media)) {
    throw new Error('createCanvasFromMedia - media has not finished loading yet')
  }

  const { width, height } = dims || getMediaDimensions(media)
  const canvas = createCanvas({ width, height })
  getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height)
  return canvas
}

export function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement) {
  if (media instanceof HTMLImageElement) {
    return { width: media.naturalWidth, height: media.naturalHeight }
  }
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

export async function imageTensorToCanvas(
  imgTensor: tf.Tensor,
  canvas?: HTMLCanvasElement
): Promise<HTMLCanvasElement> {
  const targetCanvas = canvas ||  document.createElement('canvas')

  const [height, width, numChannels] = imgTensor.shape.slice(isTensor4D(imgTensor) ? 1 : 0)
  const imgTensor3D = tf.tidy(() => imgTensor.as3D(height, width, numChannels).toInt())
  await tf.toPixels(imgTensor3D, targetCanvas)

  imgTensor3D.dispose()

  return targetCanvas
}