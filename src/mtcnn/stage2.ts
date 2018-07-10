import * as tf from '@tensorflow/tfjs-core';

import { createCanvas, getContext2dOrThrow } from '../utils';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { BoundingBox } from './BoundingBox';
import { nms } from './nms';
import { normalize } from './normalize';
import { RNet } from './RNet';
import { RNetParams } from './types';

export async function stage2(
  img: HTMLCanvasElement,
  boxes: { box: BoundingBox, score: number }[],
  scoreThreshold: number,
  params: RNetParams
) {

  const { height, width } = img

  const imgCtx = getContext2dOrThrow(img)

  const bitmaps = await Promise.all(boxes.map(async ({ box }) => {
    // TODO: correct padding
    const { y, ey, x, ex } = box.padAtBorders(height, width)

    const fromX = x - 1
    const fromY = y - 1
    const imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY))

    return createImageBitmap(imgData)
  }))

  const imagePatchesData: number[] = []

  bitmaps.forEach(bmp => {
    const patch = createCanvas({ width: 24, height: 24 })
    const patchCtx = getContext2dOrThrow(patch)
    patchCtx.drawImage(bmp, 0, 0, 24, 24)
    const { data } = patchCtx.getImageData(0, 0, 24, 24)

    for(let i = 0; i < data.length; i++) {
      if ((i + 1) % 4 === 0) continue
      imagePatchesData.push(data[i])
    }
  })

  const rnetOut = tf.tidy(() => {
    const imagePatchTensor = bgrToRgbTensor(tf.transpose(
      tf.tensor4d(imagePatchesData, [boxes.length, 24, 24, 3]),
      [0, 2, 1, 3]
    ).toFloat()) as tf.Tensor4D

    const normalized = normalize(imagePatchTensor)

    const { prob, regions } = RNet(normalized, params)
    return {
      scores: tf.unstack(prob, 1)[1],
      regions
    }
  })

  const scores = Array.from(await rnetOut.scores.data())

  const indices = scores
    .map((score, idx) => ({ score, idx }))
    .filter(c => c.score > scoreThreshold)
    .map(({ idx }) => idx)

  const filteredBoxes = indices.map(idx => boxes[idx].box)
  const filteredScores = indices.map(idx => scores[idx])

  let finalBoxes: BoundingBox[] = []
  let finalScores: number[] = []

  if (filteredBoxes.length > 0) {
    const indicesNms = nms(
      filteredBoxes,
      filteredScores,
      0.7
    )

    finalScores = indicesNms.map(idx => filteredScores[idx])
    finalBoxes = indicesNms
      .map(idx => {
        const box = filteredBoxes[idx]
        const [rleft, rtop, right, rbottom] = [
          rnetOut.regions.get(indices[idx], 0),
          rnetOut.regions.get(indices[idx], 1),
          rnetOut.regions.get(indices[idx], 2),
          rnetOut.regions.get(indices[idx], 3)
        ]

        return new BoundingBox(
          box.left + (rleft * box.width),
          box.top + (rtop * box.height),
          box.right + (right * box.width),
          box.bottom + (rbottom * box.height)
        ).toSquare().round()
      })
  }

  rnetOut.regions.dispose()
  rnetOut.scores.dispose()

  return {
    finalBoxes,
    finalScores
  }
}