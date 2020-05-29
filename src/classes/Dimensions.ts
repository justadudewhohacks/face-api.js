import { isValidNumber } from '../utils';

export interface IDimensions {
  width: number
  height: number
}

export class Dimensions implements IDimensions {

  private _width: number
  private _height: number

  constructor(width: number, height: number) {
    if (!isValidNumber(width) || !isValidNumber(height)) {
      throw new Error(`Dimensions.constructor - expected width and height to be valid numbers, instead have ${JSON.stringify({ width, height })}`)
    }

    this._width = width
    this._height = height
  }

  public get width(): number { return this._width }
  public get height(): number { return this._height }

  public reverse(): Dimensions {
    return new Dimensions(1 / this.width, 1 / this.height)
  }

  public clone() {
    return new Dimensions(this._width, this._height)
  }

  public div(dims: Dimensions | number): Dimensions {
    const [dw, dh] = this.interpretDims(dims)
    return new Dimensions(this.width / dw, this.height / dh)
  }

  public mul(dims: Dimensions | number): Dimensions {
    const [dw, dh] = this.interpretDims(dims)
    return new Dimensions(this.width * dw, this.height * dh)
  }

  private interpretDims(dims: Dimensions | number) {
    return dims instanceof Dimensions ? [dims.width, dims.height] : [dims, dims]
  }
}