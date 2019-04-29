import { FaceDetection } from '../classes/FaceDetection';

export type WithFaceDetection<TSource> = TSource & {
  detection: FaceDetection
}

export function isWithFaceDetection(obj: any): obj is WithFaceDetection<{}> {
  return obj['detection'] instanceof FaceDetection
}

export function extendWithFaceDetection<
  TSource
> (
  sourceObj: TSource,
  detection: FaceDetection
): WithFaceDetection<TSource> {

  const extension = { detection }
  return Object.assign({}, sourceObj, extension)
}
