import { Dimensions, IDimensions } from './classes';
import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks } from './classes/FaceLandmarks';
import { extendWithFaceDetection, isWithFaceDetection } from './factories/WithFaceDetection';
import { extendWithFaceLandmarks, isWithFaceLandmarks } from './factories/WithFaceLandmarks';

export function resizeResults<T>(results: T, dimensions: IDimensions): T {

  const { width, height } = new Dimensions(dimensions.width, dimensions.height)

  if (width <= 0 || height <= 0) {
    throw new Error(`resizeResults - invalid dimensions: ${JSON.stringify({ width, height })}`)
  }

  if (Array.isArray(results)) {
    return results.map(obj => resizeResults(obj, { width, height })) as any as T
  }

  if (isWithFaceLandmarks(results)) {
    const resizedDetection = results.detection.forSize(width, height)
    const resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height)

    return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks)
  }

  if (isWithFaceDetection(results)) {
    return extendWithFaceDetection(results, results.detection.forSize(width, height))
  }

  if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
    return (results as any).forSize(width, height)
  }

  return results
}