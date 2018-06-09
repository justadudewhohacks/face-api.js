import { FaceDetectionNet } from './types';

export class FaceDetectionResult {
  private _score: number
  private _topRelative: number
  private _leftRelative: number
  private _bottomRelative: number
  private _rightRelative: number

  constructor(
    score: number,
    topRelative: number,
    leftRelative: number,
    bottomRelative: number,
    rightRelative: number
  ) {
    this._score = score
    this._topRelative = Math.max(0, topRelative),
    this._leftRelative = Math.max(0, leftRelative),
    this._bottomRelative  = Math.min(1.0, bottomRelative),
    this._rightRelative = Math.min(1.0, rightRelative)
  }

  public forSize(width: number, height: number): FaceDetectionNet.Detection {
    const x = Math.floor(this._leftRelative * width)
    const y = Math.floor(this._topRelative * height)
    return {
      score: this._score,
      box: {
        x,
        y,
        width: Math.floor(this._rightRelative * width) - x,
        height: Math.floor(this._bottomRelative * height) - y
      }
    }
  }
}