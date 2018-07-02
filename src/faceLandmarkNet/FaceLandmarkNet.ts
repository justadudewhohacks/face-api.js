import * as tf from '@tensorflow/tfjs-core';

import { convLayer } from '../commons/convLayer';
import { toInputTensor } from '../commons/toInputTensor';
import { ConvParams } from '../commons/types';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { toNetInput } from '../toNetInput';
import { TNetInput } from '../types';
import { isEven } from '../utils';
import { extractParams } from './extractParams';
import { FaceLandmarks } from './FaceLandmarks';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { loadQuantizedParams } from './loadQuantizedParams';
import { NetParams } from './types';

function conv(x: tf.Tensor4D, params: ConvParams): tf.Tensor4D {
  return convLayer(x, params, 'valid', true)
}

function maxPool(x: tf.Tensor4D, strides: [number, number] = [2, 2]): tf.Tensor4D {
  return tf.maxPool(x, [2, 2], strides, 'valid')
}

export class FaceLandmarkNet {

  private _params: NetParams

  public async load(weightsOrUrl: Float32Array | string | undefined): Promise<void> {
    if (weightsOrUrl instanceof Float32Array) {
      this.extractWeights(weightsOrUrl)
      return
    }

    if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
      throw new Error('FaceLandmarkNet.load - expected model uri, or weights as Float32Array')
    }
    this._params = await loadQuantizedParams(weightsOrUrl)
  }

  public extractWeights(weights: Float32Array) {
    this._params = extractParams(weights)
  }

  public forwardTensor(input: tf.Tensor | NetInput): tf.Tensor2D {
    const params = this._params

    if (!params) {
      throw new Error('FaceLandmarkNet - load model before inference')
    }

    return tf.tidy(() => {
      const { batchTensor, batchInfo } = toInputTensor(input, 128, true)

      let out = conv(batchTensor, params.conv0_params)
      out = maxPool(out)
      out = conv(out, params.conv1_params)
      out = conv(out, params.conv2_params)
      out = maxPool(out)
      out = conv(out, params.conv3_params)
      out = conv(out, params.conv4_params)
      out = maxPool(out)
      out = conv(out, params.conv5_params)
      out = conv(out, params.conv6_params)
      out = maxPool(out, [1, 1])
      out = conv(out, params.conv7_params)
      const fc0 = tf.relu(fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0_params))
      const fc1 = fullyConnectedLayer(fc0, params.fc1_params)

      const createInterleavedTensor = (fillX: number, fillY: number) =>
        tf.stack([
          tf.fill([68], fillX),
          tf.fill([68], fillY)
        ], 1).as2D(1, 136).as1D()

      /* shift coordinates back, to undo centered padding
        x = ((x * widthAfterPadding) - shiftX) / width
        y = ((y * heightAfterPadding) - shiftY) / height
      */

      const landmarkTensors = fc1
        .mul(tf.stack(batchInfo.map(info =>
          createInterleavedTensor(
            info.paddingX + info.originalWidth,
            info.paddingY + info.originalHeight
          )
        )))
        .sub(tf.stack(batchInfo.map(info =>
          createInterleavedTensor(
            Math.floor(info.paddingX / 2),
            Math.floor(info.paddingY / 2)
          )
        )))
        .div(tf.stack(batchInfo.map(info =>
          createInterleavedTensor(
            info.originalWidth,
            info.originalHeight
          )
        )))

      return landmarkTensors as tf.Tensor2D
    })
  }

  public async forward(input: tf.Tensor | NetInput | TNetInput): Promise<tf.Tensor2D> {
    const netInput = input instanceof tf.Tensor
      ? input
      : await toNetInput(input)

    return this.forwardTensor(netInput)
  }

  public async detectLandmarks(input: tf.Tensor | NetInput | TNetInput): Promise<FaceLandmarks | FaceLandmarks[]> {
    const netInput = input instanceof tf.Tensor
      ? input
      : await toNetInput(input)

    const landmarkTensors = tf.unstack(this.forwardTensor(netInput))

    const landmarksForBatch = await Promise.all(landmarkTensors.map(
      async (landmarkTensor, batchIdx) => {
        const landmarksArray = Array.from(await landmarkTensor.data())
        landmarkTensor.dispose()

        const xCoords = landmarksArray.filter((_, i) => isEven(i))
        const yCoords = landmarksArray.filter((_, i) => !isEven(i))

        const [height, width] = netInput instanceof tf.Tensor
          ? netInput.shape.slice(1)
          : [netInput.canvases[batchIdx].height, netInput.canvases[batchIdx].width]

        return new FaceLandmarks(
          Array(68).fill(0).map((_, i) => new Point(xCoords[i], yCoords[i])),
          { height, width }
        )
      }
    ))

    return landmarksForBatch.length === 1 ? landmarksForBatch[0] : landmarksForBatch
  }
}