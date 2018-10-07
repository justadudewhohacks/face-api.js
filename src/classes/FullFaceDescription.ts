import { FaceDetection } from './FaceDetection';
import { FaceDetectionWithLandmarks } from './FaceDetectionWithLandmarks';
import { FaceLandmarks } from './FaceLandmarks';

export class FullFaceDescription extends FaceDetectionWithLandmarks {
  private _descriptor: Float32Array

  constructor(
    detection: FaceDetection,
    landmarks: FaceLandmarks,
    descriptor: Float32Array
  ) {
    super(detection, landmarks)
    this._descriptor = descriptor
  }

  public get descriptor(): Float32Array {
    return this._descriptor
  }

  public forSize(width: number, height: number): FullFaceDescription {
    const { detection, landmarks } = super.forSize(width, height)
    return new FullFaceDescription(detection, landmarks, this.descriptor)
  }
}