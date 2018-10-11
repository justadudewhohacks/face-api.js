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

  public get alignedRect(): FaceDetection {
    const rect = this.landmarks.align()
    const { imageDims } = this.detection
    return new FaceDetection(this._detection.score, rect.rescale(imageDims.reverse()), imageDims)
  }

  public get landmarks(): FaceLandmarks {
    const { x, y } = this.detection.box
    return this._relativeLandmarks.shift(x, y)
  }

  public forSize(width: number, height: number): FaceDetectionWithLandmarks {
    const resizedDetection = this._detection.forSize(width, height)
    const resizedLandmarks = this._relativeLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height)
    return new FaceDetectionWithLandmarks(resizedDetection, resizedLandmarks)
  }
}