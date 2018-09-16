import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from 'tfjs-image-recognition-base';
import { convLayer, ConvParams } from 'tfjs-tiny-yolov2';

import { extractParams } from './extractParams';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { loadQuantizedParams } from './loadQuantizedParams';
import { NetParams } from './types';

function conv(x: tf.Tensor4D, params: ConvParams): tf.Tensor4D {
  return convLayer(x, params, 'valid', true)
}

function maxPool(x: tf.Tensor4D, strides: [number, number] = [2, 2]): tf.Tensor4D {
  return tf.maxPool(x, [2, 2], strides, 'valid')
}

export class FaceLandmark68Net extends FaceLandmark68NetBase<NetParams> {

  constructor() {
    super('FaceLandmark68Net')
  }

  public runNet(input: NetInput): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('FaceLandmark68Net - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(128, true).toFloat() as tf.Tensor4D

      let out = conv(batchTensor, params.conv0)
      out = maxPool(out)
      out = conv(out, params.conv1)
      out = conv(out, params.conv2)
      out = maxPool(out)
      out = conv(out, params.conv3)
      out = conv(out, params.conv4)
      out = maxPool(out)
      out = conv(out, params.conv5)
      out = conv(out, params.conv6)
      out = maxPool(out, [1, 1])
      out = conv(out, params.conv7)
      const fc0 = tf.relu(fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0))

      return fullyConnectedLayer(fc0, params.fc1)
    })
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}