import { IDimensions } from 'tfjs-image-recognition-base';

import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks } from './classes/FaceLandmarks';
import { extendWithFaceDetection } from './factories/WithFaceDetection';
import { extendWithFaceLandmarks } from './factories/WithFaceLandmarks';

export function resizeResults<T>(results: T, { width, height }: IDimensions): T {

  if (Array.isArray(results)) {
    return results.map(obj => resizeResults(obj, { width, height })) as any as T
  }

  const hasLandmarks = results['unshiftedLandmarks'] && results['unshiftedLandmarks'] instanceof FaceLandmarks
  const hasDetection = results['detection'] && results['detection'] instanceof FaceDetection

  if (hasLandmarks) {
    const resizedDetection = results['detection'].forSize(width, height)
    const resizedLandmarks = results['unshiftedLandmarks'].forSize(resizedDetection.box.width, resizedDetection.box.height)

    return extendWithFaceLandmarks(extendWithFaceDetection(results as any, resizedDetection), resizedLandmarks)
  }

  if (hasDetection) {
    return extendWithFaceDetection(results as any, results['detection'].forSize(width, height))
  }

  if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
    return (results as any).forSize(width, height)
  }

  return results
}