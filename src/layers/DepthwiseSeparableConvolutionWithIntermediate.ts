import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { BatchNorm, BatchNormOptionals } from './BatchNorm';
import { Bias } from './Bias';
import { extractWeightTensor4D } from './common';
import { Layer } from './Layer';
import { Shape4D } from './types';

export class DepthwiseSeparableConvolutionWithIntermediate extends Layer {
  private _depthwiseFilter: tf.Tensor4D
  private _depthwiseConvBiasOrBn: Bias | BatchNorm
  private _pointwiseFilter: tf.Tensor4D
  private _pointwiseConvBiasOrBn: Bias | BatchNorm

  private _stride: [number, number]
  private _channelsIn: number
  private _channelsOut: number

  private get depthwiseFilterShape() : Shape4D { return [3, 3, this._channelsIn, 1] }
  private get pointwiseFilterShape() : Shape4D { return [1, 1, this._channelsIn, this._channelsOut] }

  constructor(name: string, stride: [number, number], channelsIn: number, channelsOut: number, batchNormOptionals: BatchNormOptionals | null = null) {
    super(name)
    this._stride = stride
    this._channelsIn = channelsIn
    this._channelsOut = channelsOut
    this._depthwiseConvBiasOrBn = batchNormOptionals instanceof BatchNormOptionals
      ? new BatchNorm(this._withNamePath('batch_norm_depthwise_conv'), channelsIn, batchNormOptionals)
      : new Bias(this._withNamePath('bias_depthwise_conv'), channelsIn)
    this._pointwiseConvBiasOrBn = batchNormOptionals instanceof BatchNormOptionals
      ? new BatchNorm(this._withNamePath('batch_norm_pointwise_conv'), channelsOut, batchNormOptionals)
      : new Bias(this._withNamePath('bias_pointwise_conv'), channelsOut)
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._depthwiseFilter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.depthwiseFilterShape)), this.depthwiseFilterShape)
    this._depthwiseConvBiasOrBn.initializeParams(extractWeights)
    this._pointwiseFilter = tf.tensor4d(extractWeights(tf.util.sizeFromShape(this.pointwiseFilterShape)), this.pointwiseFilterShape)
    this._pointwiseConvBiasOrBn.initializeParams(extractWeights)
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._depthwiseFilter = extractWeightTensor4D(weightMap, this._withNamePath('depthwise_filter'))
    this._depthwiseConvBiasOrBn.initializeParamsFromWeightMap(weightMap)
    this._pointwiseFilter = extractWeightTensor4D(weightMap, this._withNamePath('pointwise_filter'))
    this._pointwiseConvBiasOrBn.initializeParamsFromWeightMap(weightMap)
  }

  protected _dispose(): void {
    this._depthwiseFilter.dispose()
    this._depthwiseConvBiasOrBn.dispose()
    this._pointwiseFilter.dispose()
    this._pointwiseConvBiasOrBn.dispose()
  }

  protected _getParamShapes(): number[][] {
    return [
      this.depthwiseFilterShape,
      ...this._depthwiseConvBiasOrBn.getParamShapes(),
      this.pointwiseFilterShape,
      ...this._pointwiseConvBiasOrBn.getParamShapes()
    ]
  }

  protected _apply(x: tf.Tensor4D): tf.Tensor4D {
    let out = tf.depthwiseConv2d(x, this._depthwiseFilter, this._stride, 'same')
    out = this._depthwiseConvBiasOrBn.apply(out)
    out = tf.relu(out)
    out = tf.conv2d(out, this._pointwiseFilter, [1, 1], 'same')
    out = this._pointwiseConvBiasOrBn.apply(out)
    return out
  }
}