import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, normalize, TNetInput, toNetInput } from 'tfjs-image-recognition-base';
import { ConvParams, SeparableConvParams } from 'tfjs-tiny-yolov2';

import { depthwiseSeparableConv } from './depthwiseSeparableConv';
import { extractParamsFromWeigthMapTiny } from './extractParamsFromWeigthMapTiny';
import { extractParamsTiny } from './extractParamsTiny';
import { DenseBlock3Params, IFaceFeatureExtractor, TinyFaceFeatureExtractorParams } from './types';

function denseBlock(
  x: tf.Tensor4D,
  denseBlockParams: DenseBlock3Params,
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

    return tf.relu(tf.add(out1, tf.add(out2, out3))) as tf.Tensor4D
  })
}

export class TinyFaceFeatureExtractor extends NeuralNetwork<TinyFaceFeatureExtractorParams> implements IFaceFeatureExtractor<TinyFaceFeatureExtractorParams> {

  constructor() {
    super('TinyFaceFeatureExtractor')
  }

  public forwardInput(input: NetInput): tf.Tensor4D {

    const { params } = this

    if (!params) {
      throw new Error('TinyFaceFeatureExtractor - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(112, true)
      const meanRgb = [122.782, 117.001, 104.298]
      const normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255)) as tf.Tensor4D

      let out = denseBlock(normalized, params.dense0, true)
      out = denseBlock(out, params.dense1)
      out = denseBlock(out, params.dense2)
      out = tf.avgPool(out, [14, 14], [2, 2], 'valid')

      return out
    })
  }

  public async forward(input: TNetInput): Promise<tf.Tensor4D> {
    return this.forwardInput(await toNetInput(input))
  }

  protected getDefaultModelName(): string {
    return 'face_landmark_68_tiny_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {
    return extractParamsFromWeigthMapTiny(weightMap)
  }

  protected extractParams(weights: Float32Array) {
    return extractParamsTiny(weights)
  }
}