import { Box, IDimensions, ObjectDetection, Rect } from 'tfjs-image-recognition-base';

export interface IFaceDetecion {
  score: number
  box: Box
}

export class FaceDetection extends ObjectDetection implements IFaceDetecion {
  constructor(
    score: number,
    relativeBox: Rect,
    imageDims: IDimensions
  ) {
    super(score, score, '', relativeBox, imageDims)
  }

  public forSize(width: number, height: number): FaceDetection {
    return super.forSize(width, height)
  }
}