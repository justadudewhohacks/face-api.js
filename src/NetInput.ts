import { Dimensions, TMediaElement, TNetInput } from './types';
import { createCanvasFromMedia, getElement } from './utils';

export class NetInput {
  private _canvases: HTMLCanvasElement[]

  constructor(
    mediaArg: TNetInput,
    dims?: Dimensions
  ) {
    const mediaArgArray = Array.isArray(mediaArg)
      ? mediaArg
      : [mediaArg]

    if (!mediaArgArray.length) {
      throw new Error('NetInput - empty array passed as input')
    }

    const medias = mediaArgArray.map(getElement)


    medias.forEach((media, i) => {
      if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) {
        const idxHint = Array.isArray(mediaArg) ? ` at input index ${i}:` : ''
        if (typeof mediaArgArray[i] === 'string') {
          throw new Error(`NetInput -${idxHint} string passed, but could not resolve HTMLElement for element id`)
        }
        throw new Error(`NetInput -${idxHint} expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id`)
      }
    })

    this._canvases = []
    medias.forEach(m => this.initCanvas(m, dims))
  }

  private initCanvas(media: TMediaElement, dims?: Dimensions) {
    if (media instanceof HTMLCanvasElement) {
      this._canvases.push(media)
      return
    }

    // if input is batch type, make sure every canvas has the same dimensions
    const canvasDims = this.dims || dims
    this._canvases.push(createCanvasFromMedia(media, canvasDims))
  }

  public get canvases() : HTMLCanvasElement[] {
    return this._canvases
  }

  public get width() : number {
    return (this._canvases[0] || {}).width
  }

  public get height() : number {
    return (this._canvases[0] || {}).height
  }

  public get dims() : Dimensions | null {
    const { width, height } = this
    return (width > 0 && height > 0) ? { width, height } : null
  }
}