import { FaceDetection } from '../classes/FaceDetection';
import { FaceLandmarks } from '../classes/FaceLandmarks';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { WithFaceDetection } from './WithFaceDetection';

export type WithFaceLandmarks<
  TSource extends WithFaceDetection<{}>,
  TFaceLandmarks extends FaceLandmarks = FaceLandmarks68
> = TSource & {
  landmarks: TFaceLandmarks
  unshiftedLandmarks: TFaceLandmarks
  alignedRect: FaceDetection
}

export function extendWithFaceLandmarks<
  TSource extends WithFaceDetection<{}>,
  TFaceLandmarks extends FaceLandmarks = FaceLandmarks68
> (
  sourceObj: TSource,
  unshiftedLandmarks: TFaceLandmarks
): WithFaceLandmarks<TSource, TFaceLandmarks> {

  const { box: shift } = sourceObj.detection
  const landmarks = unshiftedLandmarks.shiftBy<TFaceLandmarks>(shift.x, shift.y)

  const rect = landmarks.align()
  const { imageDims } = sourceObj.detection
  const alignedRect = new FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims)

  const extension = {
    landmarks,
    unshiftedLandmarks,
    alignedRect
  }

  return Object.assign({}, sourceObj, extension)
}