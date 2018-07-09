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
}