import { CELL_SIZE } from './config';

export function pyramidDown(minFaceSize: number, scaleFactor: number, dims: number[]): number[] {

  const [height, width] = dims
  const m = CELL_SIZE / minFaceSize

  const scales = []

  let minLayer = Math.min(height, width) * m
  let exp = 0
  while (minLayer >= 12) {
    scales.push(m * Math.pow(scaleFactor, exp))
    minLayer = minLayer * scaleFactor
    exp += 1
  }

  return scales
}