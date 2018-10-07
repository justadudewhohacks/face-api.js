import { FaceDetection } from './FaceDetection';
import { FaceLandmarks } from './FaceLandmarks';

export class FaceDetectionWithLandmarks {
  private _detection: FaceDetection
  private _relativeLandmarks: FaceLandmarks

  constructor(
    detection: FaceDetection,
    relativeLandmarks: FaceLandmarks
  ) {
    this._detection = detection
    this._relativeLandmarks = relativeLandmarks
  }

  public get detection(): FaceDetection { return this._detection }

  public get relativeLandmarks(): FaceLandmarks { return this._relativeLandmarks }

  public get landmarks(): FaceLandmarks {
    const { x, y } = this.detection.box
    return this._relativeLandmarks.shift(x, y)
  }

  public forSize(width: number, height: number): FaceDetectionWithLandmarks {
    return new FaceDetectionWithLandmarks(
      this._detection.forSize(width, height),
      this._relativeLandmarks.forSize(width, height)
    )
  }
}