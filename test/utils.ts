export function zeros(length: number): Float32Array {
  return new Float32Array(length)
}

export function ones(length: number): Float32Array {
  return new Float32Array(length).fill(1)
}

export function expectMaxDelta(val1: number, val2: number, maxDelta: number) {
  expect(Math.abs(val1 - val2)).toBeLessThan(maxDelta)
}
