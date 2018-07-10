import { FaceLandmarks } from '../FaceLandmarks';
import { IPoint, Point } from '../Point';

export class FaceLandmarks5 extends FaceLandmarks {

  public forSize(width: number, height: number): FaceLandmarks5 {
    return new FaceLandmarks5(
      this.getRelativePositions(),
      { width, height }
    )
  }

  public shift(x: number, y: number): FaceLandmarks5 {
    return new FaceLandmarks5(
      this.getRelativePositions(),
      { width: this._imageWidth, height: this._imageHeight },
      new Point(x, y)
    )
  }

  public shiftByPoint(pt: IPoint): FaceLandmarks5 {
    return this.shift(pt.x, pt.y)
  }
}