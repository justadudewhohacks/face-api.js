import { IDimensions, ObjectDetection, Rect } from 'tfjs-image-recognition-base';

export class FaceDetection extends ObjectDetection {
  constructor(
    score: number,
    relativeBox: Rect,
    imageDims: IDimensions
  ) {
    super(score, score, '', relativeBox, imageDims)
  }
}