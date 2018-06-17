import { Point, IPoint } from '../Point';
import { Dimensions } from '../types';

export class FaceLandmarks {
  private _faceLandmarks: Point[]
  private _imageWidth: number
  private _imageHeight: number
  private _shift: Point

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

  public getPositions() {
    return this._faceLandmarks
  }

  public getRelativePositions() {
    return this._faceLandmarks.map(
      pt => pt.sub(this._shift).div(new Point(this._imageWidth, this._imageHeight))
    )
  }

  public getJawOutline() {
    return this._faceLandmarks.slice(0, 17)
  }

  public getLeftEyeBrow() {
    return this._faceLandmarks.slice(17, 22)
  }

  public getRightEyeBrow() {
    return this._faceLandmarks.slice(22, 27)
  }

  public getNose() {
    return this._faceLandmarks.slice(27, 36)
  }

  public getLeftEye() {
    return this._faceLandmarks.slice(36, 42)
  }

  public getRightEye() {
    return this._faceLandmarks.slice(42, 48)
  }

  public getMouth() {
    return this._faceLandmarks.slice(48, 68)
  }

  public forSize(width: number, height: number): FaceLandmarks {
    return new FaceLandmarks(
      this.getRelativePositions(),
      { width, height }
    )
  }

  public shift(x: number, y: number): FaceLandmarks {
    return new FaceLandmarks(
      this.getRelativePositions(),
      { width: this._imageWidth, height: this._imageHeight },
      new Point(x, y)
    )
  }
}