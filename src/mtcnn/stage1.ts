import * as tf from '@tensorflow/tfjs-core';

import { Point } from '../Point';
import { BoundingBox } from './BoundingBox';
import { CELL_SIZE, CELL_STRIDE } from './config';
import { nms } from './nms';
import { normalize } from './normalize';
import { PNet } from './PNet';
import { PNetParams } from './types';

function rescaleAndNormalize(x: tf.Tensor4D, scale: number): tf.Tensor4D {
  return tf.tidy(() => {

    const [height, width] = x.shape.slice(1)
    const resized = tf.image.resizeBilinear(x, [Math.floor(height * scale), Math.floor(width * scale)])
    const normalized = normalize(resized)

    return (tf.transpose(normalized, [0, 2, 1, 3]) as tf.Tensor4D)
  })
}

function extractBoundingBoxes(
  scoresTensor: tf.Tensor2D,
  regionsTensor: tf.Tensor3D,
  scale: number,
  scoreThreshold: number
) {

  // TODO: fix this!, maybe better to use tf.gather here
  const indices: Point[] = []
  for (let y = 0; y < scoresTensor.shape[0]; y++) {
    for (let x = 0; x < scoresTensor.shape[1]; x++) {
      if (scoresTensor.get(y, x) >= scoreThreshold) {
        indices.push(new Point(x, y))
      }
    }
  }

  const boundingBoxes = indices.map(idx => {
    const cell = new BoundingBox(
      Math.round((idx.y * CELL_STRIDE + 1) / scale),
      Math.round((idx.x * CELL_STRIDE + 1) / scale),
      Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale),
      Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale)
    )

    const score = scoresTensor.get(idx.y, idx.x)

    const region = new BoundingBox(
      regionsTensor.get(idx.y, idx.x, 0),
      regionsTensor.get(idx.y, idx.x, 1),
      regionsTensor.get(idx.y, idx.x, 2),
      regionsTensor.get(idx.y, idx.x, 3)
    )

    return {
      cell,
      score,
      region
    }
  })

  return boundingBoxes
}

export function stage1(
  imgTensor: tf.Tensor4D,
  scales: number[],
  scoreThreshold: number,
  params: PNetParams
) {

  const boxesForScale = scales.map((scale, i) => {

    const { scoresTensor, regionsTensor } = tf.tidy(() => {
      const resized = rescaleAndNormalize(imgTensor, scale)


      const { prob, regions } = PNet(resized, params)


      const scoresTensor = tf.unstack(tf.unstack(prob, 3)[1])[0] as tf.Tensor2D
      const regionsTensor = tf.unstack(regions)[0] as tf.Tensor3D

      return {
        scoresTensor,
        regionsTensor
      }
    })

    const boundingBoxes = extractBoundingBoxes(
      scoresTensor,
      regionsTensor,
      scale,
      scoreThreshold
    )

    scoresTensor.dispose()
    regionsTensor.dispose()

    if (!boundingBoxes.length) {
      return []
    }

    const indices = nms(
      boundingBoxes.map(bbox => bbox.cell),
      boundingBoxes.map(bbox => bbox.score),
      0.5
    )

    return indices.map(boxIdx => boundingBoxes[boxIdx])
  })

  const allBoxes = boxesForScale.reduce(
    (all, boxes) => all.concat(boxes)
  )

  let finalBoxes: BoundingBox[] = []
  let finalScores: number[] = []

  if (allBoxes.length > 0) {
    const indices = nms(
      allBoxes.map(bbox => bbox.cell),
      allBoxes.map(bbox => bbox.score),
      0.7
    )

    finalScores = indices.map(idx => allBoxes[idx].score)
    finalBoxes = indices
      .map(idx => allBoxes[idx])
      .map(({ cell, region }) =>
        new BoundingBox(
          cell.left + (region.left * cell.width),
          cell.top + (region.top * cell.height),
          cell.right + (region.right * cell.width),
          cell.bottom + (region.bottom * cell.height)
        ).toSquare().round()
      )

  }

  return {
    boxes: finalBoxes,
    scores: finalScores
  }

}
