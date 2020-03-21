import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { extractWeightTensor1D } from './common';
import { Layer } from './Layer';

export class BatchNormOptionals {
  constructor(
    public withOffset: boolean = false,
    public withScale: boolean = false,
    public varianceEpsilon: number = 0.001) {}
}

export class BatchNorm extends Layer {

  private _mean: tf.Tensor1D
  private _variance: tf.Tensor1D
  private _offset: tf.Tensor1D
  private _scale: tf.Tensor1D

  private _channels: number
  private _withOffset: boolean
  private _withScale: boolean
  private _varianceEpsilon: number

  constructor(name: string, channels: number, optionals: BatchNormOptionals = new BatchNormOptionals()) {
    super(name)
    this._channels = channels
    this._withOffset = optionals.withOffset
    this._withScale = optionals.withScale
    this._varianceEpsilon = optionals.varianceEpsilon
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._mean = tf.tensor1d(extractWeights(this._channels))
    this._variance = tf.tensor1d(extractWeights(this._channels))
    this._offset = this._withOffset ? tf.tensor1d(extractWeights(this._channels)) : tf.zeros([this._channels])
    this._scale = this._withScale ? tf.tensor1d(extractWeights(this._channels)) : tf.ones([this._channels])
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._mean = extractWeightTensor1D(weightMap, this._withNamePath('mean'))
    this._variance = extractWeightTensor1D(weightMap, this._withNamePath('variance'))
    this._offset = this._withOffset ? extractWeightTensor1D(weightMap, this._withNamePath('offset')) : tf.zeros([this._channels])
    this._scale = this._withScale ? extractWeightTensor1D(weightMap, this._withNamePath('scale')) : tf.ones([this._channels])
  }

  protected _dispose(): void {
    this._mean.dispose()
    this._variance.dispose()
    this._offset.dispose()
    this._scale.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [true, true, this._withOffset, this._withScale]
      .filter(v => v)
      .map(() => [this._channels])
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    return tf.batchNorm4d(x, this._mean, this._variance, this._offset, this._scale, this._varianceEpsilon)
  }

}