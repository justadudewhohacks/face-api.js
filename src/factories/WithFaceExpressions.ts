import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';

export type WithFaceExpressions<TSource> = TSource & {
  expressions: FaceExpressions
}

export function isWithFaceExpressions(obj: any): obj is WithFaceExpressions<{}> {
  return obj['expressions'] instanceof FaceExpressions
}

export function extendWithFaceExpressions<
  TSource
> (
  sourceObj: TSource,
  expressions: FaceExpressions
): WithFaceExpressions<TSource> {

  const extension = { expressions }
  return Object.assign({}, sourceObj, extension)
}