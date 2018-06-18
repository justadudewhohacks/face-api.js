export interface IRect {
  x: number
  y: number
  width: number
  height: number
}

export class Rect implements IRect {
  public x: number
  public y: number
  public width: number
  public height: number

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  public floor(): Rect {
    return new Rect(
      Math.floor(this.x),
      Math.floor(this.y),
      Math.floor(this.width),
      Math.floor(this.height)
    )
  }
}