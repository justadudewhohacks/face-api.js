import * as tf from '@tensorflow/tfjs-core';

import { Point } from '../Point';
import { CELL_SIZE, CELL_STRIDE } from './config';
import { PNet } from './PNet';
import { PNetParams } from './types';

function rescaleAndNormalize(x: tf.Tensor4D, scale: number): tf.Tensor4D {
  return tf.tidy(() => {

    const [height, width] = x.shape.slice(1)
    const resized = tf.image.resizeBilinear(x, [Math.floor(height * scale), Math.floor(width * scale)])
    const normalized = tf.mul(tf.sub(resized, tf.scalar(127.5)), tf.scalar(0.0078125))

    return (tf.transpose(normalized, [0, 2, 1, 3]) as tf.Tensor4D)
  })
}


function extractBoundingBoxes(
  scores: tf.Tensor2D,
  regions: tf.Tensor3D,
  scale: number,
  scoreThreshold: number
) {

  // TODO: fix this!, maybe better to use tf.gather here
  const indices2D: Point[] = []
  for (let y = 0; y < scores.shape[0]; y++) {
    for (let x = 0; x < scores.shape[1]; x++) {
      if (scores.get(y, x) >= scoreThreshold) {
        indices2D.push(new Point(x, y))
      }
    }
  }

  if (!indices2D.length) {
    return null
  }

  return tf.tidy(() => {

    const indicesTensor = tf.tensor2d(
      indices2D.map(pt => [pt.y, pt.x]),
      [indices2D.length, 2]
    )

    const cellsStart = tf.round(
      indicesTensor.mul(tf.scalar(CELL_STRIDE)).add(tf.scalar(1)).div(tf.scalar(scale))
    ) as tf.Tensor2D
    const cellsEnd = tf.round(
      indicesTensor.mul(tf.scalar(CELL_STRIDE)).add(tf.scalar(CELL_SIZE)).div(tf.scalar(scale))
    ) as tf.Tensor2D

    const scoresTensor = tf.tensor1d(indices2D.map(pt => scores.get(pt.y, pt.x)))

    const candidateRegions = indices2D.map(c => ({
      left: regions.get(c.y, c.x, 0),
      top: regions.get(c.y, c.x, 1),
      right: regions.get(c.y, c.x, 2),
      bottom: regions.get(c.y, c.x, 3)
    }))

    const regionsTensor = tf.tensor2d(
      candidateRegions.map(r => [r.left, r.top, r.right, r.bottom]),
      [candidateRegions.length, 4]
    )

    const boxesTensor = tf.concat2d([cellsStart, cellsEnd, scoresTensor.as2D(scoresTensor.size, 1), regionsTensor], 1)

    return boxesTensor
  })
}

// TODO: debug
declare const window: any

export function stage1(x: tf.Tensor4D, scales: number[], scoreThreshold: number, params: PNetParams) {
  return tf.tidy(() => {

    const boxes = scales.map((scale, i) => {
      let resized = i === 0
        // TODO: debug
        ? tf.tensor4d(window.resizedData, [1, 820, 461, 3])

        : rescaleAndNormalize(x, scale)

      const { prob, regions } = PNet(resized, params)

      const scores = tf.unstack(prob, 3)[1]
      const [sh, sw] = scores.shape.slice(1)
      const [rh, rw] = regions.shape.slice(1)


      const boxes = extractBoundingBoxes(
        scores.as2D(sh, sw),
        regions.as3D(rh, rw, 4),
        scale,
        scoreThreshold
      )

      // TODO: debug
      if (!boxes) {
        console.log('no boxes for scale', scale)
        return
      }
      // TODO: debug
      i === 0 && (window.boxes = boxes.dataSync())

    })

  })
}