import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { flattenArray } from '../utils';
import { range } from '../utils';
import { BatchNormOptionals } from './BatchNorm';
import { Convolution } from './Convolution';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { Layer } from './Layer';

export class TopDown extends Layer<tf.Tensor4D[], tf.Tensor4D[]> {

  private _stageStrides: number[] | null
  private _channelShrinkConvs: Convolution[]
  private _antiAliasingConvs: DepthwiseSeparableConvolution[]

  constructor(name: string, stageOutChannels: number[], topDownOutChannels: number, stageStrides = null, batchNormOptionals: BatchNormOptionals | null = null) {
    super(name)
    this._stageStrides = stageStrides
    this._channelShrinkConvs = stageOutChannels.map((channels, stageIdx) =>
      new Convolution(this._withNamePath(`conv_shrink_${stageIdx}`), [1, 1], channels, topDownOutChannels, 1, batchNormOptionals))
    this._antiAliasingConvs = range(stageOutChannels.length, 0, 1).map(stageIdx =>
      new DepthwiseSeparableConvolution(this._withNamePath(`conv_anti_aliasing_${stageIdx}`), [1, 1], topDownOutChannels, topDownOutChannels, batchNormOptionals)
    )
  }

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._channelShrinkConvs.forEach(l => l.initializeParams(extractWeights))
    this._antiAliasingConvs.forEach(l => l.initializeParams(extractWeights))
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._channelShrinkConvs.forEach(l => l.initializeParamsFromWeightMap(weightMap))
    this._antiAliasingConvs.forEach(l => l.initializeParamsFromWeightMap(weightMap))
  }

  protected _dispose(): void {
    this._antiAliasingConvs.forEach(l => l.dispose())
  }

  protected _getParamShapes(): number[][] {
    return flattenArray(this._antiAliasingConvs.map(l => l.getParamShapes()))
  }

  protected _apply(x: tf.Tensor4D[]): tf.Tensor4D[] {
    const shrinkedOutputs = this._channelShrinkConvs.map((conv, idx) => conv.apply(x[idx]))
    const outputs = [shrinkedOutputs[0]]
    let up = shrinkedOutputs[0]
    for (let idx = 1; idx < shrinkedOutputs.length; idx++) {
      const stageOutput =  shrinkedOutputs[idx]
      const targetShape = [stageOutput.shape[1],  stageOutput.shape[2]] as [number, number]
      if (this._stageStrides === null || this._stageStrides[idx - 1] !== this._stageStrides[idx]) {
        up = up.resizeNearestNeighbor(targetShape)
      }
      up = tf.add(up, stageOutput)
      const out = tf.relu(this._antiAliasingConvs[idx].apply(up))
      outputs.push(out)
    }
    return outputs
  }
}
