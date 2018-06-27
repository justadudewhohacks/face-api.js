import { Dimensions, TMediaElement } from './types';
import { createCanvasFromMedia } from './utils';

export class NetInput {
  private _canvases: HTMLCanvasElement[]

  constructor(
    medias: Array<TMediaElement>,
    dims?: Dimensions
  ) {
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