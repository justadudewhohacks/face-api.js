import * as tf from '@tensorflow/tfjs-core';

import { ComposedLayer } from './ComposedLayer';
import { Convolution } from './Convolution';
import { ILayer } from './Layer';

export class SshContextModule extends ComposedLayer<tf.Tensor4D, [tf.Tensor4D, tf.Tensor4D]> {
  private _convShrink: Convolution
  private _conv1: Convolution
  private _convOut1: Convolution
  private _convOut2: Convolution

  constructor(name: string, channelsIn: number, channels: number) {
    super(name)
    this._convShrink = new Convolution(this._withNamePath('conv_shrink'), [1, 1], channelsIn, channels, 3)
    this._conv1 = new Convolution(this._withNamePath('conv_1'), [1, 1], channels, channels, 3)
    this._convOut1 = new Convolution(this._withNamePath('conv_out_1'), [1, 1], channels, channels, 3)
    this._convOut2 = new Convolution(this._withNamePath('conv_out_2'), [1, 1], channels, channels, 3)
  }

  protected _getLayers(): ILayer[] {
    return [this._convShrink, this._conv1, this._convOut1, this._convOut2]
  }

  protected _apply(x: tf.Tensor4D): [tf.Tensor4D, tf.Tensor4D] {
    const shrink = tf.relu(this._convShrink.apply(x))
    const out1 = this._convOut1.apply(tf.relu(this._conv1.apply(shrink)))
    const out2 = this._convOut2.apply(shrink)
    return [out1, out2]
  }

}