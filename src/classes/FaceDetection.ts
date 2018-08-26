import { Dimensions, ObjectDetection, Rect } from 'tfjs-image-recognition-base';

export class FaceDetection extends ObjectDetection {
  constructor(
    score: number,
    relativeBox: Rect,
    imageDims: Dimensions
  ) {
    super(score, score, '', relativeBox, imageDims)
  }
}