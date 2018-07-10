import { Point } from '../Point';
import { BoundingBox } from './BoundingBox';
import { extractImagePatches } from './extractImagePatches';
import { nms } from './nms';
import { ONet } from './ONet';
import { ONetParams } from './types';

export async function stage3(
  img: HTMLCanvasElement,
  inputBoxes: BoundingBox[],
  scoreThreshold: number,
  params: ONetParams
) {

  const onetInput = await extractImagePatches(img, inputBoxes, { width: 48, height: 48 })
  const onetOut = ONet(onetInput, params)

  onetInput.dispose()

  const scores = Array.from(await onetOut.scores.data())
  const indices = scores
    .map((score, idx) => ({ score, idx }))
    .filter(c => c.score > scoreThreshold)
    .map(({ idx }) => idx)

  const filteredRegions = indices.map(idx => new BoundingBox(
    onetOut.regions.get(idx, 0),
    onetOut.regions.get(idx, 1),
    onetOut.regions.get(idx, 2),
    onetOut.regions.get(idx, 3)
  ))
  const filteredBoxes = indices
    .map((idx, i) => inputBoxes[idx].calibrate(filteredRegions[i]))
  const filteredScores = indices.map(idx => scores[idx])

  let finalBoxes: BoundingBox[] = []
  let finalScores: number[] = []
  let points: Point[][] = []

  if (filteredBoxes.length > 0) {

    const indicesNms = nms(
      filteredBoxes,
      filteredScores,
      0.7,
      false
    )

    finalBoxes = indicesNms.map(idx => filteredBoxes[idx])
    finalScores = indicesNms.map(idx => filteredScores[idx])
    points = indicesNms.map((idx, i) =>
      Array(5).fill(0).map((_, ptIdx) =>
        new Point(
          ((onetOut.points.get(idx, ptIdx) * (finalBoxes[i].width + 1)) + finalBoxes[i].left) ,
          ((onetOut.points.get(idx, ptIdx + 5) * (finalBoxes[i].height + 1)) + finalBoxes[i].top)
        )
      )
    )
  }

  onetOut.regions.dispose()
  onetOut.scores.dispose()
  onetOut.points.dispose()

  return {
    boxes: finalBoxes,
    scores: finalScores,
    points
  }

}
