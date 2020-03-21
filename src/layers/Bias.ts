import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { extractWeightTensor1D } from './common';
import { Layer } from './Layer';

export class Bias extends Layer {

  private _channels: number
  private _bias: tf.Tensor1D

  constructor(name: string, channels: number) {
    super(name)
    this._channels = channels
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._bias = tf.tensor1d(extractWeights(this._channels))
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._bias = extractWeightTensor1D(weightMap, this.name)
  }

  protected _dispose(): void {
    this._bias.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [[this._channels]]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    return tf.add(x, this._bias)
  }
}