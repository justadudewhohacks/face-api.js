export function getSizesForScale(scale: number, [height, width]: number[]) {
  return {
    height: Math.floor(height * scale),
    width: Math.floor(width * scale)
  }
}