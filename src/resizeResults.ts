import { IDimensions } from 'tfjs-image-recognition-base';

import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks } from './classes/FaceLandmarks';
import { extendWithFaceDetection } from './factories/WithFaceDetection';
import { extendWithFaceLandmarks } from './factories/WithFaceLandmarks';

export function resizeResults<T>(obj: T, { width, height }: IDimensions): T {

  const hasLandmarks = obj['unshiftedLandmarks'] && obj['unshiftedLandmarks'] instanceof FaceLandmarks
  const hasDetection = obj['detection'] && obj['detection'] instanceof FaceDetection

  if (hasLandmarks) {
    const resizedDetection = obj['detection'].forSize(width, height)
    const resizedLandmarks = obj['unshiftedLandmarks'].forSize(resizedDetection.box.width, resizedDetection.box.height)

    return extendWithFaceLandmarks(extendWithFaceDetection(obj as any, resizedDetection), resizedLandmarks)
  }

  if (hasDetection) {
    return extendWithFaceDetection(obj as any, obj['detection'].forSize(width, height))
  }

  if (obj instanceof FaceLandmarks || obj instanceof FaceDetection) {
    return (obj as any).forSize(width, height)
  }

  return obj
}