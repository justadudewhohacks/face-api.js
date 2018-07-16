import { getCenterPoint } from '../commons/getCenterPoint';
import { FaceDetection } from '../FaceDetection';
import { FaceLandmarks } from '../FaceLandmarks';
import { Point } from '../Point';
import { Rect } from '../Rect';

export class FaceLandmarks68 extends FaceLandmarks {
  public getJawOutline(): Point[] {
    return this._faceLandmarks.slice(0, 17)
  }

  public getLeftEyeBrow(): Point[] {
    return this._faceLandmarks.slice(17, 22)
  }

  public getRightEyeBrow(): Point[] {
    return this._faceLandmarks.slice(22, 27)
  }

  public getNose(): Point[] {
    return this._faceLandmarks.slice(27, 36)
  }

  public getLeftEye(): Point[] {
    return this._faceLandmarks.slice(36, 42)
  }

  public getRightEye(): Point[] {
    return this._faceLandmarks.slice(42, 48)
  }

  public getMouth(): Point[] {
    return this._faceLandmarks.slice(48, 68)
  }

  protected getRefPointsForAlignment(): Point[] {
    return [
      this.getLeftEye(),
      this.getRightEye(),
      this.getMouth()
    ].map(getCenterPoint)
  }
}