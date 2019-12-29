import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { flattenArray } from '../utils';
import { Convolution } from './Convolution';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { Layer } from './Layer';

export class XceptionReductionModule extends Layer {

  private _isActivateInput: boolean
  private _depthwiseSeparableConv0: DepthwiseSeparableConvolution
  private _depthwiseSeparableConv1: DepthwiseSeparableConvolution
  private _reductionConv: Convolution

  constructor(name: string, channelsIn: number, channelsOut: number, isActivateInput: boolean = true) {
    super(name)
    this._isActivateInput = isActivateInput
    this._depthwiseSeparableConv0 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_0'), [1, 1], channelsIn, channelsOut)
    this._depthwiseSeparableConv1 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_1'), [1, 1], channelsOut, channelsOut)
    this._reductionConv = new Convolution(this._withNamePath('reduction_conv'), [2, 2], channelsIn, channelsOut, 1)
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._depthwiseSeparableConv0.initializeParams(extractWeights)
    this._depthwiseSeparableConv1.initializeParams(extractWeights)
    this._reductionConv.initializeParams(extractWeights)
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._depthwiseSeparableConv0.initializeParamsFromWeightMap(weightMap)
    this._depthwiseSeparableConv1.initializeParamsFromWeightMap(weightMap)
    this._reductionConv.initializeParamsFromWeightMap(weightMap)
  }

  protected _dispose(): void {
    this._depthwiseSeparableConv0.dispose()
    this._depthwiseSeparableConv1.dispose()
    this._reductionConv.dispose()
  }

  protected _getParamShapes(): number[][] {
    return flattenArray(
      [this._depthwiseSeparableConv0, this._depthwiseSeparableConv1, this._reductionConv]
        .map(l => l.getParamShapes())
    )
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._isActivateInput ? tf.relu(x) : x
    out = this._depthwiseSeparableConv0.apply(out)
    out = this._depthwiseSeparableConv1.apply(tf.relu(out))
    out = tf.maxPool(out, [3, 3], [2, 2], 'same')
    out = tf.add(out, this._reductionConv.apply(x))
    return out
  }

}