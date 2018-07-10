import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';

export class FullFaceDescription {
  constructor(
    private _detection: FaceDetection,
    private _landmarks: FaceLandmarks68,
    private _descriptor: Float32Array
  ) {}

  public get detection(): FaceDetection {
    return this._detection
  }

  public get landmarks(): FaceLandmarks68 {
    return this._landmarks
  }

  public get descriptor(): Float32Array {
    return this._descriptor
  }

  public forSize(width: number, height: number): FullFaceDescription {
    return new FullFaceDescription(
      this._detection.forSize(width, height),
      this._landmarks.forSize(width, height),
      this._descriptor
    )
  }
}