import { BoundingBox } from './BoundingBox';
import { extractImagePatches } from './extractImagePatches';
import { nms } from './nms';
import { RNet } from './RNet';
import { RNetParams } from './types';

export async function stage2(
  img: HTMLCanvasElement,
  inputBoxes: BoundingBox[],
  scoreThreshold: number,
  params: RNetParams
) {

  const rnetInput = await extractImagePatches(img, inputBoxes, { width: 24, height: 24 })
  const rnetOut = RNet(rnetInput, params)

  rnetInput.dispose()

  const scores = Array.from(await rnetOut.scores.data())
  const indices = scores
    .map((score, idx) => ({ score, idx }))
    .filter(c => c.score > scoreThreshold)
    .map(({ idx }) => idx)

  const filteredBoxes = indices.map(idx => inputBoxes[idx])
  const filteredScores = indices.map(idx => scores[idx])

  let finalBoxes: BoundingBox[] = []
  let finalScores: number[] = []

  if (filteredBoxes.length > 0) {
    const indicesNms = nms(
      filteredBoxes,
      filteredScores,
      0.7
    )

    const regions = indicesNms.map(idx =>
      new BoundingBox(
        rnetOut.regions.get(indices[idx], 0),
        rnetOut.regions.get(indices[idx], 1),
        rnetOut.regions.get(indices[idx], 2),
        rnetOut.regions.get(indices[idx], 3)
      )
    )

    finalScores = indicesNms.map(idx => filteredScores[idx])
    finalBoxes = indicesNms.map((idx, i) => filteredBoxes[idx].calibrate(regions[i]))
  }

  rnetOut.regions.dispose()
  rnetOut.scores.dispose()

  return {
    boxes: finalBoxes,
    scores: finalScores
  }
}