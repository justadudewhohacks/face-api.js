export type WithFaceDescriptor<TSource> = TSource & {
  descriptor: Float32Array
}

export function extendWithFaceDescriptor<
  TSource
> (
  sourceObj: TSource,
  descriptor: Float32Array
): WithFaceDescriptor<TSource> {

  const extension = { descriptor }
  return Object.assign({}, sourceObj, extension)
}

