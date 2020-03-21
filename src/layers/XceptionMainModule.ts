import * as tf from '@tensorflow/tfjs-core';

import { ComposedLayer } from './ComposedLayer';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { ILayer } from './Layer';

export class XceptionMainModule extends ComposedLayer {
  private _depthwiseSeparableConv0: DepthwiseSeparableConvolution
  private _depthwiseSeparableConv1: DepthwiseSeparableConvolution
  private _depthwiseSeparableConv2: DepthwiseSeparableConvolution

  constructor(name: string, channels: number) {
    super(name)
    this._depthwiseSeparableConv0 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_0'), [1, 1], channels, channels)
    this._depthwiseSeparableConv1 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_1'), [1, 1], channels, channels)
    this._depthwiseSeparableConv2 = new DepthwiseSeparableConvolution(this._withNamePath('depthwise_separable_conv_2'), [1, 1], channels, channels)
  }

  protected _getLayers(): ILayer[] {
    return [this._depthwiseSeparableConv0, this._depthwiseSeparableConv1, this._depthwiseSeparableConv2]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = this._depthwiseSeparableConv0.apply(tf.relu(x))
    out = this._depthwiseSeparableConv1.apply(tf.relu(out))
    out = this._depthwiseSeparableConv2.apply(tf.relu(out))
    out = tf.add(out, x)
    return out
  }

}