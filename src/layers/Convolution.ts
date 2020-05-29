import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { BatchNorm, BatchNormOptionals } from './BatchNorm';
import { Bias } from './Bias';
import { extractWeightTensor4D } from './common';
import { Layer } from './Layer';
import { Shape4D } from './types';

export class Convolution extends Layer {

  private _filter: tf.Tensor4D
  private _biasOrBn: Bias | BatchNorm | null

  private _stride: [number, number]
  private _channelsIn: number
  private _channelsOut: number
  private _kernelSize: number

  private get filterShape() : Shape4D { return [this._kernelSize, this._kernelSize, this._channelsIn, this._channelsOut] }

  constructor(name: string, stride: [number, number], channelsIn: number, channelsOut: number, kernelSize: number, batchNormOptionals: BatchNormOptionals | null = null, withBias: boolean = true) {
    super(name)
    this._stride = stride
    this._channelsIn = channelsIn
    this._channelsOut = channelsOut
    this._kernelSize = kernelSize
    this._biasOrBn = withBias ? (
      batchNormOptionals instanceof BatchNormOptionals
        ? new BatchNorm(this._withNamePath('batch_norm'), channelsOut, batchNormOptionals)
        : new Bias(this._withNamePath('bias'), channelsOut)
    ) : null
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._filter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.filterShape)), this.filterShape)
    this._biasOrBn && this._biasOrBn.initializeParams(extractWeights)
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._filter = extractWeightTensor4D(weightMap, this._withNamePath('filters'))
    this._biasOrBn && this._biasOrBn.initializeParamsFromWeightMap(weightMap)
  }

  protected _dispose(): void {
    this._filter.dispose()
    this._biasOrBn && this._biasOrBn.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [this.filterShape, ...(this._biasOrBn ? this._biasOrBn.getParamShapes() : [])]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = tf.conv2d(x, this._filter, this._stride, 'same')
    return this._biasOrBn ? this._biasOrBn.apply(out) : out
  }

}