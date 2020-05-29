import * as tf from '@tensorflow/tfjs-core';

import { ComposedLayer } from './ComposedLayer';
import { Convolution } from './Convolution';
import { ILayer } from './Layer';
import { BatchNormOptionals } from './BatchNorm';

export class SshDetectionModule extends ComposedLayer {
  private _conv3x3: Convolution
  private _conv5x5_1: Convolution
  private _conv5x5_2: Convolution
  private _conv7x7_1: Convolution
  private _conv7x7_2: Convolution

  constructor(name: string, channelsIn: number, channels: number, batchNormOptionals: BatchNormOptionals | null = null) {
    super(name)
    const c4 = channels / 4
    this._conv3x3 = new Convolution(this._withNamePath('conv_3x3'), [1, 1], channelsIn, channels / 2, 3, batchNormOptionals)
    this._conv5x5_1 = new Convolution(this._withNamePath('conv_5x5_1'), [1, 1], channelsIn, c4, 3, batchNormOptionals)
    this._conv5x5_2 = new Convolution(this._withNamePath('conv_5x5_2'), [1, 1], c4, c4, 3, batchNormOptionals)
    this._conv7x7_1 = new Convolution(this._withNamePath('conv_7x7_1'), [1, 1], c4, c4, 3, batchNormOptionals)
    this._conv7x7_2 = new Convolution(this._withNamePath('conv_7x7_2'), [1, 1], c4, c4, 3, batchNormOptionals)
  }

  protected _getLayers(): ILayer[] {
    return [this._conv3x3, this._conv5x5_1, this._conv5x5_2, this._conv7x7_1, this._conv7x7_2]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    const out0 = this._conv3x3.apply(x)
    const shrink = tf.relu(this._conv5x5_1.apply(x))
    const out1 = this._conv5x5_2.apply(shrink)
    const out2 = this._conv7x7_2.apply(tf.relu(this._conv7x7_1.apply(shrink)))
    return tf.relu(tf.concat([out0, out1, out2], 3))
  }

}