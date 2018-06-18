import { getCenterPoint } from '../commons/getCenterPoint';
import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { Point } from '../Point';
import { Rect } from '../Rect';
import { Dimensions } from '../types';

// face alignment constants
const relX = 0.5
const relY = 0.43
const relScale = 0.45

export class FaceLandmarks {
  private _imageWidth: number
  private _imageHeight: number
  private _shift: Point
  private _faceLandmarks: Point[]

  constructor(
    relativeFaceLandmarkPositions: Point[],
    imageDims: Dimensions,
    shift: Point = new Point(0, 0)
  ) {
    const { width, height } = imageDims
    this._imageWidth = width
    this._imageHeight = height
    this._shift = shift
    this._faceLandmarks = relativeFaceLandmarkPositions.map(
      pt => pt.mul(new Point(width, height)).add(shift)
    )
  }

  public getShift(): Point {
    return new Point(this._shift.x, this._shift.y)
  }

  public getImageWidth(): number {
    return this._imageWidth
  }

  public getImageHeight(): number {
    return this._imageHeight
  }

  public getPositions(): Point[] {
    return this._faceLandmarks
  }

  public getRelativePositions(): Point[] {
    return this._faceLandmarks.map(
      pt => pt.sub(this._shift).div(new Point(this._imageWidth, this._imageHeight))
    )
  }

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

  public forSize(width: number, height: number): FaceLandmarks {
    return new FaceLandmarks(
      this.getRelativePositions(),
      { width, height }
    )
  }

  public shift(x: number, y: number): FaceLandmarks {
    return new FaceLandmarks(
      this.getRelativePositions(),
      { width: this._imageWidth, height: this._imageHeight },
      new Point(x, y)
    )
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