// TODO
export type FaceExpressions = number[]

export type WithFaceExpressions<TSource> = TSource & {
  expressions: FaceExpressions
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