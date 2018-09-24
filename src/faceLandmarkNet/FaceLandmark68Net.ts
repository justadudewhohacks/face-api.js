import * as tf from '@tensorflow/tfjs-core';
import { NetInput, normalize } from 'tfjs-image-recognition-base';
import { ConvParams } from 'tfjs-tiny-yolov2';
import { SeparableConvParams } from 'tfjs-tiny-yolov2/build/tinyYolov2/types';

import { depthwiseSeparableConv } from './depthwiseSeparableConv';
import { extractParams } from './extractParams';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { loadQuantizedParams } from './loadQuantizedParams';
import { DenseBlock4Params, NetParams } from './types';

function denseBlock(
  x: tf.Tensor4D,
  denseBlockParams: DenseBlock4Params,
  isFirstLayer: boolean = false
): tf.Tensor4D {
  return tf.tidy(() => {
    const out1 = tf.relu(
      isFirstLayer
        ? tf.add(
          tf.conv2d(x, (denseBlockParams.conv0 as ConvParams).filters, [2, 2], 'same'),
          denseBlockParams.conv0.bias
        )
        : depthwiseSeparableConv(x, denseBlockParams.conv0 as SeparableConvParams, [2, 2])
    ) as tf.Tensor4D
    const out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1])

    const in3 = tf.relu(tf.add(out1, out2)) as tf.Tensor4D
    const out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1])

    const in4 = tf.relu(tf.add(out1, tf.add(out2, out3))) as tf.Tensor4D
    const out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1])

    return tf.relu(tf.add(out1, tf.add(out2, tf.add(out3, out4)))) as tf.Tensor4D
  })
}

export class FaceLandmark68Net extends FaceLandmark68NetBase<NetParams> {

  constructor() {
    super('FaceLandmark68LargeNet')
  }

  public runNet(input: NetInput): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('FaceLandmark68LargeNet - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(112, true)
      const meanRgb = [122.782, 117.001, 104.298]
      const normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255)) as tf.Tensor4D

      let out = denseBlock(normalized, params.dense0, true)
      out = denseBlock(out, params.dense1)
      out = denseBlock(out, params.dense2)
      out = denseBlock(out, params.dense3)
      out = tf.avgPool(out, [7, 7], [2, 2], 'valid')

      return fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc)
    })
  }

  protected loadQuantizedParams(uri: string | undefined) {
    return loadQuantizedParams(uri)
  }


  protected extractParams(weights: Float32Array) {
    return extractParams(weights)
  }
}