export function euclideanDistance(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length)
    throw new Error('euclideanDistance: arr1.length !== arr2.length')

  return Math.sqrt(
    arr1
      .map((val, i) => val - arr2[i])
      .reduce((res, diff) => res + Math.pow(diff, 2), 0)
  )
}