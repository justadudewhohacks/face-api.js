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

    this._canvases.push(createCanvasFromMedia(media, dims))
  }

  public get canvases() : HTMLCanvasElement[] {
    return this._canvases
  }
}