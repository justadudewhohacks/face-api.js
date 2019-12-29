import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { flattenArray } from '../utils';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { Layer } from './Layer';

export class XceptionMainModule extends Layer {
  private _depthwiseSeparableConv0: DepthwiseSeparableConvolution
  private _depthwiseSeparableConv1: DepthwiseSeparableConvolution
  private _depthwiseSeparableConv2: DepthwiseSeparableConvolution

  constructor(name: string, channels: number) {
    super(name)
    this._depthwiseSeparableConv0 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_0'), [1, 1], channels, channels)
    this._depthwiseSeparableConv1 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_1'), [1, 1], channels, channels)
    this._depthwiseSeparableConv2 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_2'), [1, 1], channels, channels)
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._depthwiseSeparableConv0.initializeParams(extractWeights)
    this._depthwiseSeparableConv1.initializeParams(extractWeights)
    this._depthwiseSeparableConv2.initializeParams(extractWeights)
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._depthwiseSeparableConv0.initializeParamsFromWeightMap(weightMap)
    this._depthwiseSeparableConv1.initializeParamsFromWeightMap(weightMap)
    this._depthwiseSeparableConv2.initializeParamsFromWeightMap(weightMap)
  }

  protected _dispose(): void {
    this._depthwiseSeparableConv0.dispose()
    this._depthwiseSeparableConv1.dispose()
    this._depthwiseSeparableConv2.dispose()
  }

  protected _getParamShapes(): number[][] {
    return flattenArray(
      [this._depthwiseSeparableConv0, this._depthwiseSeparableConv1, this._depthwiseSeparableConv2]
        .map(l => l.getParamShapes())
    )
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._depthwiseSeparableConv0.apply(tf.relu(x))
    out = this._depthwiseSeparableConv1.apply(tf.relu(out))
    out = this._depthwiseSeparableConv2.apply(tf.relu(out))
    out = tf.add(out, x)
    return out
  }

}