import { BoundingBox } from './BoundingBox';

export function nms(
  boxes: BoundingBox[],
  scores: number[],
  iouThreshold: number,
  isIOU: boolean = true
): number[] {

  const areas = boxes.map(
    box => (box.width + 1) * (box.height + 1)
  )

  let indicesSortedByScore = scores
    .map((score, boxIndex) => ({ score, boxIndex }))
    .sort((c1, c2) => c1.score - c2.score)
    .map(c => c.boxIndex)

  const pick: number[] = []

  while(indicesSortedByScore.length > 0) {
    const curr = indicesSortedByScore.pop() as number
    pick.push(curr)

    const indices = indicesSortedByScore

    const outputs: number[] = []
    for (let i = 0; i < indices.length; i++) {
      const idx = indices[i]

      const currBox = boxes[curr]
      const idxBox = boxes[idx]

      const width = Math.max(0.0, Math.min(currBox.right, idxBox.right) - Math.max(currBox.left, idxBox.left) + 1)
      const height = Math.max(0.0, Math.min(currBox.bottom, idxBox.bottom) - Math.max(currBox.top, idxBox.top) + 1)
      const interSection = width * height

      const out = isIOU
        ? interSection / (areas[curr] + areas[idx] - interSection)
        : interSection / Math.min(areas[curr], areas[idx])

      outputs.push(out)
    }

    indicesSortedByScore = indicesSortedByScore.filter(
      (_, j) => outputs[j] <= iouThreshold
    )
  }

  return pick

}