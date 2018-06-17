export interface IPoint {
  x: number
  y: number
}

export class Point implements IPoint {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public add(pt: IPoint): Point {
    return new Point(this.x + pt.x, this.y + pt.y)
  }

  public sub(pt: IPoint): Point {
    return new Point(this.x - pt.x, this.y - pt.y)
  }

  public mul(pt: IPoint): Point {
    return new Point(this.x * pt.x, this.y * pt.y)
  }

  public div(pt: IPoint): Point {
    return new Point(this.x / pt.x, this.y / pt.y)
  }
}