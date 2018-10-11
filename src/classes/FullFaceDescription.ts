import { FaceDetection } from './FaceDetection';
import { FaceDetectionWithLandmarks } from './FaceDetectionWithLandmarks';
import { FaceLandmarks } from './FaceLandmarks';
import { FaceLandmarks68 } from './FaceLandmarks68';

export class FullFaceDescription<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> extends FaceDetectionWithLandmarks<TFaceLandmarks> {
  private _descriptor: Float32Array

  constructor(
    detection: FaceDetection,
    unshiftedLandmarks: TFaceLandmarks,
    descriptor: Float32Array
  ) {
    super(detection, unshiftedLandmarks)
    this._descriptor = descriptor
  }

  public get descriptor(): Float32Array {
    return this._descriptor
  }

  public forSize(width: number, height: number): FullFaceDescription<TFaceLandmarks> {
    const { detection, landmarks } = super.forSize(width, height)
    return new FullFaceDescription<TFaceLandmarks>(detection, landmarks, this.descriptor)
  }
}