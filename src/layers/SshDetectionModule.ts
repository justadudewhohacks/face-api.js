import * as tf from '@tensorflow/tfjs-core';

import { ComposedLayer } from './ComposedLayer';
import { Convolution } from './Convolution';
import { ILayer } from './Layer';
import { SshContextModule } from './SshContextModule';

export class SshDetectionModule extends ComposedLayer {
  private _sshCtxModule: SshContextModule
  private _convShrink: Convolution

  constructor(name: string, channelsIn: number, channels: number) {
    super(name)
    this._sshCtxModule = new SshContextModule(this._withNamePath('ctx'), channelsIn, channels / 4)
    this._convShrink = new Convolution(this._withNamePath('conv_shrink'), [1, 1], channelsIn, channels / 2, 3)
  }

  protected _getLayers(): ILayer[] {
    return [this._sshCtxModule, this._convShrink]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    const [ctxOut1, ctxOut2] = this._sshCtxModule.apply(x)
    const shrink = tf.relu(this._convShrink.apply(x))
    return tf.relu(tf.concat([shrink, ctxOut1, ctxOut2], 3))
  }

}