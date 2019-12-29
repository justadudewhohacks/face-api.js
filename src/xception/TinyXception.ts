import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../dom';
import { Convolution, DepthwiseSeparableConvolution, XceptionMainModule, XceptionReductionModule } from '../layers';
import { Layer } from '../layers/Layer';
import { NeuralNetwork } from '../NeuralNetwork';
import { normalize } from '../ops';
import { range } from '../utils';

export class TinyXception extends NeuralNetwork {

  private _entryConv: Convolution
  private _entryReductionModule0: XceptionReductionModule
  private _entryReductionModule1: XceptionReductionModule
  private _mainModules: XceptionMainModule[]
  private _exitReductionModule: XceptionReductionModule
  private _exitDepthwiseSeparableConv: DepthwiseSeparableConvolution

  constructor(numMainBlocks: number) {
    super('TinyXception')
    this._entryConv = new Convolution('entry_flow/conv_in', [2, 2], 3, 32, 3)
    this._entryReductionModule0 = new XceptionReductionModule('entry_flow/reduction_block_0', 32, 64, false)
    this._entryReductionModule1 = new XceptionReductionModule('entry_flow/reduction_block_1', 64, 128)
    this._mainModules = range(numMainBlocks, 0, 1).map(idx => new XceptionMainModule(`middle_flow/main_block_${idx}`, 128))
    this._exitReductionModule = new XceptionReductionModule('exit_flow/reduction_block', 128, 256)
    this._exitDepthwiseSeparableConv = new DepthwiseSeparableConvolution('exit_flow/separable_conv', [1, 1], 256, 512)
  }

  protected _getDefaultModelName(): string {
    return 'tiny_xception_model';
  }

  protected _getParamLayers(): Layer[] {
    return [
      this._entryConv,
      this._entryReductionModule0,
      this._entryReductionModule1,
      ...this._mainModules,
      this._exitReductionModule,
      this._exitDepthwiseSeparableConv
    ]
  }
  protected _forward(input: NetInput): tf.Tensor4D {
    return tf.tidy(() => {
      const batchTensor = input.toBatchTensor(112, true)
      const meanRgb = [122.782, 117.001, 104.298]
      const normalized = normalize(batchTensor, meanRgb).div(tf.scalar(256)) as tf.Tensor4D

      let out = tf.relu(this._entryConv.apply(normalized))
      out = this._entryReductionModule0.apply(out)
      out = this._entryReductionModule1.apply(out)
      this._mainModules.forEach(mainModule => {
        out = mainModule.apply(out)
      })
      out = this._exitReductionModule.apply(out)
      out = tf.relu(this._exitDepthwiseSeparableConv.apply(out))
      return out
    })
  }
}