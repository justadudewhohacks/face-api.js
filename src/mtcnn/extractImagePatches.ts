import * as tf from '@tensorflow/tfjs-core';

import { Dimensions } from '../types';
import { createCanvas, getContext2dOrThrow } from '../utils';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { BoundingBox } from './BoundingBox';
import { normalize } from './normalize';

export async function extractImagePatches(
  img: HTMLCanvasElement,
  boxes: BoundingBox[],
  { width, height }: Dimensions
): Promise<tf.Tensor4D[]> {


  const imgCtx = getContext2dOrThrow(img)

  const bitmaps = await Promise.all(boxes.map(async box => {
    // TODO: correct padding
    const { y, ey, x, ex } = box.padAtBorders(img.height, img.width)

    const fromX = x - 1
    const fromY = y - 1
    const imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY))

    return createImageBitmap(imgData)
  }))

  const imagePatchesDatas: number[][] = []

  bitmaps.forEach(bmp => {
    const patch = createCanvas({ width, height })
    const patchCtx = getContext2dOrThrow(patch)
    patchCtx.drawImage(bmp, 0, 0, width, height)
    const { data } = patchCtx.getImageData(0, 0, width, height)

    const currData = []
    for(let i = 0; i < data.length; i++) {
      if ((i + 1) % 4 === 0) continue
      currData.push(data[i])
    }
    imagePatchesDatas.push(currData)
  })


  return imagePatchesDatas.map(data => {
    const t = tf.tidy(() => {
      const imagePatchTensor = bgrToRgbTensor(tf.transpose(
        tf.tensor4d(data, [1, width, height, 3]),
        [0, 2, 1, 3]
      ).toFloat()) as tf.Tensor4D

      return normalize(imagePatchTensor)
    })
    return t
  })
}