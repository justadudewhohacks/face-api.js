import { FaceDetection } from './FaceDetection';
import { FaceLandmarks } from './FaceLandmarks';
import { FaceLandmarks68 } from './FaceLandmarks68';

export interface IFaceDetectionWithLandmarks<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> {
  detection: FaceDetection,
  landmarks: TFaceLandmarks
}

export class FaceDetectionWithLandmarks<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68>
  implements IFaceDetectionWithLandmarks<TFaceLandmarks> {

  private _detection: FaceDetection
  private _unshiftedLandmarks: TFaceLandmarks

  constructor(
    detection: FaceDetection,
    unshiftedLandmarks: TFaceLandmarks
  ) {
    this._detection = detection
    this._unshiftedLandmarks = unshiftedLandmarks
  }

  public get detection(): FaceDetection { return this._detection }
  public get unshiftedLandmarks(): TFaceLandmarks { return this._unshiftedLandmarks }

  public get alignedRect(): FaceDetection {
    const rect = this.landmarks.align()
    const { imageDims } = this.detection
    return new FaceDetection(this._detection.score, rect.rescale(imageDims.reverse()), imageDims)
  }

  public get landmarks(): TFaceLandmarks {
    const { x, y } = this.detection.box
    return this._unshiftedLandmarks.shiftBy(x, y)
  }

  // aliases for backward compatibily
  get faceDetection(): FaceDetection { return this.detection }
  get faceLandmarks(): TFaceLandmarks { return this.landmarks }

  public forSize(width: number, height: number): FaceDetectionWithLandmarks<TFaceLandmarks> {
    const resizedDetection = this._detection.forSize(width, height)
    const resizedLandmarks = this._unshiftedLandmarks.forSize<TFaceLandmarks>(resizedDetection.box.width, resizedDetection.box.height)
    return new FaceDetectionWithLandmarks<TFaceLandmarks>(resizedDetection, resizedLandmarks)
  }
}