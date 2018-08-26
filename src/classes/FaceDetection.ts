import { Dimensions, Rect } from 'tfjs-image-recognition-base';

export class FaceDetection {
  private _score: number
  private _box: Rect
  private _imageWidth: number
  private _imageHeight: number

  constructor(
    score: number,
    relativeBox: Rect,
    imageDims: Dimensions
  ) {
    const { width, height } = imageDims
    this._imageWidth = width
    this._imageHeight = height
    this._score = score
    this._box = new Rect(
      relativeBox.x * width,
      relativeBox.y * height,
      relativeBox.width * width,
      relativeBox.height * height
    )
  }

  public get score(): number {
    return this._score
  }

  public get box(): Rect {
    return this._box
  }

  public get imageWidth(): number {
    return this._imageWidth
  }

  public get imageHeight(): number {
    return this._imageHeight
  }

  public get relativeBox(): Rect {
    return new Rect(
      this._box.x / this._imageWidth,
      this._box.y / this._imageHeight,
      this._box.width / this._imageWidth,
      this._box.height / this._imageHeight
    )
  }

  public getScore() {
    return this.score
  }

  public getBox() {
    return this.box
  }

  public getImageWidth() {
    return this.imageWidth
  }

  public getImageHeight() {
    return this.imageHeight
  }

  public getRelativeBox() {
    return this.relativeBox
  }

  public forSize(width: number, height: number): FaceDetection {
    return new FaceDetection(
      this._score,
      this.getRelativeBox(),
      { width, height}
    )
  }
}