import { getCenterPoint } from '../commons/getCenterPoint';
import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { FaceLandmarks } from '../FaceLandmarks';
import { IPoint, Point } from '../Point';
import { Rect } from '../Rect';
import { Dimensions } from '../types';

// face alignment constants
const relX = 0.5
const relY = 0.43
const relScale = 0.45

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

  public forSize(width: number, height: number): FaceLandmarks68 {
    return new FaceLandmarks68(
      this.getRelativePositions(),
      { width, height }
    )
  }

  public shift(x: number, y: number): FaceLandmarks68 {
    return new FaceLandmarks68(
      this.getRelativePositions(),
      { width: this._imageWidth, height: this._imageHeight },
      new Point(x, y)
    )
  }

  public shiftByPoint(pt: IPoint): FaceLandmarks68 {
    return this.shift(pt.x, pt.y)
  }

  /**
   * Aligns the face landmarks after face detection from the relative positions of the faces
   * bounding box, or it's current shift. This function should be used to align the face images
   * after face detection has been performed, before they are passed to the face recognition net.
   * This will make the computed face descriptor more accurate.
   *
   * @param detection (optional) The bounding box of the face or the face detection result. If
   * no argument was passed the position of the face landmarks are assumed to be relative to
   * it's current shift.
   * @returns The bounding box of the aligned face.
   */
  public align(
    detection?: Rect
  ): Rect {
    if (detection) {
      const box = detection instanceof FaceDetection
        ? detection.getBox().floor()
        : detection

      return this.shift(box.x, box.y).align()
    }

    const centers = [
      this.getLeftEye(),
      this.getRightEye(),
      this.getMouth()
    ].map(getCenterPoint)

    const [leftEyeCenter, rightEyeCenter, mouthCenter] = centers
    const distToMouth = (pt: Point) => mouthCenter.sub(pt).magnitude()
    const eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2

    const size = Math.floor(eyeToMouthDist / relScale)

    const refPoint = getCenterPoint(centers)
    // TODO: pad in case rectangle is out of image bounds
    const x = Math.floor(Math.max(0, refPoint.x - (relX * size)))
    const y = Math.floor(Math.max(0, refPoint.y - (relY * size)))

    return new Rect(x, y, size, size)
  }
}