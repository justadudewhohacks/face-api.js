import { Point } from './Point';
import { Dimensions } from './types';

export class FaceLandmarks {
  protected _imageWidth: number
  protected _imageHeight: number
  protected _shift: Point
  protected _faceLandmarks: Point[]

  constructor(
    relativeFaceLandmarkPositions: Point[],
    imageDims: Dimensions,
    shift: Point = new Point(0, 0)
  ) {
    const { width, height } = imageDims
    this._imageWidth = width
    this._imageHeight = height
    this._shift = shift
    this._faceLandmarks = relativeFaceLandmarkPositions.map(
      pt => pt.mul(new Point(width, height)).add(shift)
    )
  }

  public getShift(): Point {
    return new Point(this._shift.x, this._shift.y)
  }

  public getImageWidth(): number {
    return this._imageWidth
  }

  public getImageHeight(): number {
    return this._imageHeight
  }

  public getPositions(): Point[] {
    return this._faceLandmarks
  }

  public getRelativePositions(): Point[] {
    return this._faceLandmarks.map(
      pt => pt.sub(this._shift).div(new Point(this._imageWidth, this._imageHeight))
    )
  }
}