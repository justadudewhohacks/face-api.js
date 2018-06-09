import { FaceDetectionNet } from './types';

export class FaceDetectionResult {
  private score: number
  private top: number
  private left: number
  private bottom: number
  private right: number

  constructor(
    score: number,
    top: number,
    left: number,
    bottom: number,
    right: number
  ) {
    this.score = score
    this.top = Math.max(0, top),
    this.left = Math.max(0, left),
    this.bottom  = Math.min(1.0, bottom),
    this.right = Math.min(1.0, right)
  }

  public forSize(width: number, height: number): FaceDetectionNet.Detection {
    return {
      score: this.score,
      box: {
        top: this.top * height,
        left: this.left * width,
        bottom: this.bottom * height,
        right: this.right * width
      }
    }
  }
}