import { Rect } from './Rect';

export class BoundingBox {
  constructor(
    private _left: number,
    private _top: number,
    private _right: number,
    private _bottom: number
  ) {}


  public get left() : number {
    return this._left
  }

  public get top() : number {
    return this._top
  }

  public get right() : number {
    return this._right
  }

  public get bottom() : number {
    return this._bottom
  }

  public get width() : number {
    return this.right - this.left
  }

  public get height() : number {
    return this.bottom - this.top
  }

  public toSquare(): BoundingBox {
    let { left, top, right, bottom } = this

    const off = (Math.abs(this.width - this.height) / 2)
    if (this.width < this.height) {
      left -= off
      right += off
    }
    if (this.height < this.width) {
      top -= off
      bottom += off
    }
    return new BoundingBox(left, top, right, bottom)
  }

  public round(): BoundingBox {
    return new BoundingBox(
      Math.round(this.left),
      Math.round(this.top),
      Math.round(this.right),
      Math.round(this.bottom)
    )
  }

  public padAtBorders(imageHeight: number, imageWidth: number) {
    const w = this.width + 1
    const h = this.height + 1

    let dx = 1
    let dy = 1
    let edx = w
    let edy = h

    let x = this.left
    let y = this.top
    let ex = this.right
    let ey = this.bottom

    if (ex > imageWidth) {
      edx = -ex + imageWidth + w
      ex = imageWidth
    }
    if (ey > imageHeight) {
      edy = -ey + imageHeight + h
      ey = imageHeight
    }
    if (x < 1) {
      edy = 2 - x
      x = 1
    }
    if (y < 1) {
      edy = 2 - y
      y = 1
    }

    return { dy, edy, dx, edx, y, ey, x, ex, w, h }
  }

  public calibrate(region: BoundingBox) {
    return new BoundingBox(
      this.left + (region.left * this.width),
      this.top + (region.top * this.height),
      this.right + (region.right * this.width),
      this.bottom + (region.bottom * this.height)
    ).toSquare().round()
  }

  public toRect(): Rect {
    return new Rect(this.left, this.top, this.width, this.height)
  }
}