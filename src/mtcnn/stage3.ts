import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox, Box, nonMaxSuppression, Point } from 'tfjs-image-recognition-base';

import { extractImagePatches } from './extractImagePatches';
import { MtcnnBox } from './MtcnnBox';
import { ONet } from './ONet';
import { ONetParams } from './types';

export async function stage3(
  img: HTMLCanvasElement,
  inputBoxes: BoundingBox[],
  scoreThreshold: number,
  params: ONetParams,
  stats: any
) {

  let ts = Date.now()
  const onetInputs = await extractImagePatches(img, inputBoxes, { width: 48, height: 48 })
  stats.stage3_extractImagePatches = Date.now() - ts

  ts = Date.now()
  const onetOuts = onetInputs.map(
    onetInput => {
      const out = ONet(onetInput, params)
      onetInput.dispose()
      return out
    }
  )
  stats.stage3_onet = Date.now() - ts

  const scoresTensor = onetOuts.length > 1
    ? tf.concat(onetOuts.map(out => out.scores))
    : onetOuts[0].scores
  const scores = Array.from(await scoresTensor.data())
  scoresTensor.dispose()

  const indices = scores
    .map((score, idx) => ({ score, idx }))
    .filter(c => c.score > scoreThreshold)
    .map(({ idx }) => idx)

  const filteredRegions = indices.map(idx => {
    const regionsData = onetOuts[idx].regions.arraySync();
    return new MtcnnBox(
      regionsData[0][0],
      regionsData[0][1],
      regionsData[0][2],
      regionsData[0][3]
  )})
  const filteredBoxes = indices
    .map((idx, i) => inputBoxes[idx].calibrate(filteredRegions[i]))
  const filteredScores = indices.map(idx => scores[idx])

  let finalBoxes: Box[] = []
  let finalScores: number[] = []
  let points: Point[][] = []

  if (filteredBoxes.length > 0) {

    ts = Date.now()
    const indicesNms = nonMaxSuppression(
      filteredBoxes,
      filteredScores,
      0.7,
      false
    )
    stats.stage3_nms = Date.now() - ts

    finalBoxes = indicesNms.map(idx => filteredBoxes[idx])
    finalScores = indicesNms.map(idx => filteredScores[idx])
    points = indicesNms.map((idx, i) =>
      Array(5).fill(0).map((_, ptIdx) =>{
          const pointsData = onetOuts[idx].points.arraySync()
          return new Point(
            ((pointsData[0][ptIdx] * (finalBoxes[i].width + 1)) + finalBoxes[i].left) ,
            ((pointsData[0][ptIdx+5] * (finalBoxes[i].height + 1)) + finalBoxes[i].top)
          )
        }
      )
    )
  }

  onetOuts.forEach(t => {
    t.regions.dispose()
    t.scores.dispose()
    t.points.dispose()
  })

  return {
    boxes: finalBoxes,
    scores: finalScores,
    points
  }

}
