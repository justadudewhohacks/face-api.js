export function normalize(arr: number[]) {
  const avg_r = 122.782;
  const avg_g = 117.001;
  const avg_b = 104.298;
  const avgs = [avg_r, avg_g, avg_b]
  return arr.map((val, i) => {
    const avg = avgs[i % 3]
    return (val - avg) / 256
  })
}