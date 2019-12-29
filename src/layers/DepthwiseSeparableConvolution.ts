import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { extractWeightTensor1D, extractWeightTensor4D } from './common';
import { Layer } from './Layer';
import { Shape4D } from './types';

export class DepthwiseSeparableConvolution extends Layer {
  private _depthwiseFilter: tf.Tensor4D
  private _pointwiseFilter: tf.Tensor4D
  private _bias: tf.Tensor1D

  private _stride: [number, number]
  private _channelsIn: number
  private _channelsOut: number

  private get depthwiseFilterShape() : Shape4D { return [3, 3, this._channelsIn, 1] }
  private get pointwiseFilterShape() : Shape4D { return [1, 1, this._channelsIn, this._channelsOut] }
  private get biasShape() : [number] { return [this._channelsOut] }

  constructor(name: string, stride: [number, number], channelsIn: number, channelsOut: number) {
    super(name)
    this._stride = stride
    this._channelsIn = channelsIn
    this._channelsOut = channelsOut
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._depthwiseFilter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.depthwiseFilterShape)), this.depthwiseFilterShape)
    this._pointwiseFilter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.pointwiseFilterShape)), this.pointwiseFilterShape)
    this._bias = tf.tensor1d(extractWeights(tf.util.sizeFromShape(this.biasShape)))
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._depthwiseFilter = extractWeightTensor4D(weightMap, this._withNamePath('depthwise_filter'))
    this._pointwiseFilter = extractWeightTensor4D(weightMap, this._withNamePath('pointwise_filter'))
    this._bias = extractWeightTensor1D(weightMap, this._withNamePath('bias'))
  }

  protected _dispose(): void {
    this._depthwiseFilter.dispose()
    this._pointwiseFilter.dispose()
    this._bias.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [this.depthwiseFilterShape, this.pointwiseFilterShape, this.biasShape]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = tf.separableConv2d(x, this._depthwiseFilter, this._pointwiseFilter, this._stride, 'same')
    out = tf.add(out, this._bias)
    return out
  }
}