import * as tf from '@tensorflow/tfjs-core';
import {
  NetInput,
  NeuralNetwork,
  normalize,
  range,
  TfjsImageRecognitionBase,
  TNetInput,
  toNetInput,
} from 'tfjs-image-recognition-base';

import { depthwiseSeparableConv } from '../common/depthwiseSeparableConv';
import { bgrToRgbTensor } from '../mtcnn/bgrToRgbTensor';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { MainBlockParams, ReductionBlockParams, TinyXceptionParams } from './types';

function conv(x: tf.Tensor4D, params: TfjsImageRecognitionBase.ConvParams, stride: [number, number]): tf.Tensor4D {
  return tf.add(tf.conv2d(x, params.filters, stride, 'same'), params.bias)
}

function reductionBlock(x: tf.Tensor4D, params: ReductionBlockParams, isActivateInput: boolean = true): tf.Tensor4D {
  let out = isActivateInput ? tf.relu(x) : x
  out = depthwiseSeparableConv(out, params.separable_conv0, [1, 1])
  out = depthwiseSeparableConv(tf.relu(out),  params.separable_conv1, [1, 1])
  out = tf.maxPool(out, [3, 3], [2, 2], 'same')
  out = tf.add(out, conv(x,  params.expansion_conv, [2, 2]))
  return out
}

function mainBlock(x: tf.Tensor4D, params: MainBlockParams): tf.Tensor4D {
  let out = depthwiseSeparableConv(tf.relu(x), params.separable_conv0, [1, 1])
  out = depthwiseSeparableConv(tf.relu(out), params.separable_conv1, [1, 1])
  out = depthwiseSeparableConv(tf.relu(out), params.separable_conv2, [1, 1])
  out = tf.add(out, x)
  return out
}

export class TinyXception extends NeuralNetwork<TinyXceptionParams> {

  private _numMainBlocks: number

  constructor(numMainBlocks: number) {
    super('TinyXception')
    this._numMainBlocks = numMainBlocks
  }

  public forwardInput(input: NetInput): tf.Tensor4D {

    const { params } = this

    if (!params) {
      throw new Error('TinyXception - load model before inference')
    }

    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(112, true)
      const meanRgb = [122.782, 117.001, 104.298]
      const normalized = normalize(batchTensor, meanRgb).div(tf.scalar(256)) as tf.Tensor4D

      let out = tf.relu(conv(normalized, params.entry_flow.conv_in, [2, 2]))
      out = reductionBlock(out, params.entry_flow.reduction_block_0, false)
      out = reductionBlock(out, params.entry_flow.reduction_block_1)

      range(this._numMainBlocks, 0, 1).forEach((idx) => {
        out = mainBlock(out, params.middle_flow[`main_block_${idx}`])
      })

      out = reductionBlock(out, params.exit_flow.reduction_block)
      out = tf.relu(depthwiseSeparableConv(out, params.exit_flow.separable_conv, [1, 1]))
      return out
    })
  }

  public async forward(input: TNetInput): Promise<tf.Tensor4D> {
    return this.forwardInput(await toNetInput(input))
  }

  protected getDefaultModelName(): string {
    return 'tiny_xception_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {
    return extractParamsFromWeigthMap(weightMap)
  }

  protected extractParams(weights: Float32Array) {
    return extractParams(weights, this._numMainBlocks)
  }
}