import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { extractWeightTensor1D, extractWeightTensor4D } from './common';
import { Layer } from './Layer';
import { Shape4D } from './types';

export class Convolution extends Layer {

  private _filter: tf.Tensor4D
  private _bias: tf.Tensor1D

  private _stride: [number, number]
  private _channelsIn: number
  private _channelsOut: number
  private _kernelSize: number

  private get filterShape() : Shape4D { return [this._kernelSize, this._kernelSize, this._channelsIn, this._channelsOut] }
  private get biasShape() : [number] { return [this._channelsOut] }

  constructor(name: string, stride: [number, number], channelsIn: number, channelsOut: number, kernelSize: number) {
    super(name)
    this._stride = stride
    this._channelsIn = channelsIn
    this._channelsOut = channelsOut
    this._kernelSize = kernelSize
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._filter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.filterShape)), this.filterShape)
    this._bias = tf.tensor1d(extractWeights(tf.util.sizeFromShape(this.biasShape)))
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._filter = extractWeightTensor4D(weightMap, this._withNamePath('filters'))
    this._bias = extractWeightTensor1D(weightMap, this._withNamePath('bias'))
  }

  protected _dispose(): void {
    this._filter.dispose()
    this._bias.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [this.filterShape, this.biasShape]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    return tf.add<tf.Tensor4D>(tf.conv2d(x, this._filter, this._stride, 'same'), this._bias)
  }

}