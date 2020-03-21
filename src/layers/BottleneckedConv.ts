import * as tf from '@tensorflow/tfjs-core';

import { ComposedLayer } from './ComposedLayer';
import { Convolution } from './Convolution';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { ILayer } from './Layer';

export class BottleneckedConv extends ComposedLayer {
  private _expansionConv: Convolution
  private _depthwiseSeparableConv: DepthwiseSeparableConvolution
  private _isConvDown: boolean

  constructor(name: string, channels: number, expansionFactor: number, isConvDown: boolean = false) {
    super(name)
    const expandedChannels = channels * expansionFactor
    this._isConvDown = isConvDown
    this._expansionConv = new Convolution(this._withNamePath('expansion_conv'), [1, 1], channels, expandedChannels, 1)
    this._depthwiseSeparableConv = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv'), isConvDown ? [2, 2] : [1, 1], expandedChannels, channels)
  }

  protected _getLayers(): ILayer[] {
    return [this._expansionConv, this._depthwiseSeparableConv]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._expansionConv.apply(tf.relu(x))
    out = this._depthwiseSeparableConv.apply(tf.relu(out))
    out = this._isConvDown ? out : tf.add(out, x)
    return out
  }

}