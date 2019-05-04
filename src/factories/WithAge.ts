export type WithAge<TSource> = TSource & {
  age: number
}

export function isWithAge(obj: any): obj is WithAge<{}> {
  return typeof obj['age'] === 'number'
}

export function extendWithAge<
  TSource
> (
  sourceObj: TSource,
  age: number
): WithAge<TSource> {

  const extension = { age }
  return Object.assign({}, sourceObj, extension)
}