import { FaceExpressionPrediction } from '../faceExpressionNet/types';

export type WithFaceExpressions<TSource> = TSource & {
  expressions: FaceExpressionPrediction[]
}

export function extendWithFaceExpressions<
  TSource
> (
  sourceObj: TSource,
  expressions: FaceExpressionPrediction[]
): WithFaceExpressions<TSource> {

  const extension = { expressions }
  return Object.assign({}, sourceObj, extension)
}