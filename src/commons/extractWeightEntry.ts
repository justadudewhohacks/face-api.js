import { isTensor } from './isTensor';

export function extractWeightEntry(weightMap: any, path: string, paramRank: number) {
  const tensor = weightMap[path]

  if (!isTensor(tensor, paramRank)) {
    throw new Error(`expected weightMap[${path}] to be a Tensor${paramRank}D, instead have ${tensor}`)
  }

  return { path, tensor }
}