import * as tf from '@tensorflow/tfjs-core';

import { convLayer } from '../commons/convLayer';
import { getImageTensor } from '../commons/getImageTensor';
import { ConvParams } from '../commons/types';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { toNetInput } from '../toNetInput';
import { Dimensions, TNetInput } from '../types';
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

  public async detectLandmarks(input: tf.Tensor | NetInput | TNetInput) {
    if (!this._params) {
      throw new Error('FaceLandmarkNet - load model before inference')
    }

    const netInput = input instanceof tf.Tensor
      ? input
      : await toNetInput(input)

    let imageDimensions: Dimensions | undefined

    const outTensor = tf.tidy(() => {
      const params = this._params

      let imgTensor = getImageTensor(netInput)
      const [height, width] = imgTensor.shape.slice(1)
      imageDimensions = { width, height }


      // work with 128 x 128 sized face images
      if (imgTensor.shape[1] !== 128 || imgTensor.shape[2] !== 128) {
        imgTensor = tf.image.resizeBilinear(imgTensor, [128, 128])
      }

      let out = conv(imgTensor, params.conv0_params)
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

      return fc1
    })

    const faceLandmarksArray = Array.from(await outTensor.data())
    outTensor.dispose()

    const xCoords = faceLandmarksArray.filter((c, i) => (i - 1) % 2)
    const yCoords = faceLandmarksArray.filter((c, i) => i % 2)

    return new FaceLandmarks(
      Array(68).fill(0).map((_, i) => new Point(xCoords[i], yCoords[i])),
      imageDimensions as Dimensions
    )
  }
}