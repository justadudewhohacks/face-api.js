import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { flattenArray, range } from '../utils';
import { BatchNormOptionals } from './BatchNorm';
import { Convolution } from './Convolution';
import { DepthwiseSeparableConvolution } from './DepthwiseSeparableConvolution';
import { Layer } from './Layer';

export class TopDown extends Layer<tf.Tensor4D[], tf.Tensor4D[]> {

  private _stageStrides: number[] | null
  private _channelShrinkConvs: Convolution[]
  private _antiAliasingConvs: Layer[]

  constructor(name: string,
    stageOutChannels: number[],
    topDownOutChannels: number,
    stageStrides = null,
    isMergeConvDw: boolean = false,
    batchNormOptionals: BatchNormOptionals | null = null
  ) {
    super(name)
    this._stageStrides = stageStrides
    this._channelShrinkConvs = range(stageOutChannels.length, stageOutChannels.length -1, -1).map(stageIdx =>
      new Convolution(this._withNamePath(`conv_shrink_stage_${stageIdx}`), [1, 1], stageOutChannels[stageIdx], topDownOutChannels, 1, batchNormOptionals))
    this._antiAliasingConvs = range(stageOutChannels.length - 1, stageOutChannels.length - 2, -1).map(stageIdx => isMergeConvDw
      ? new DepthwiseSeparableConvolution(this._withNamePath(`conv_anti_aliasing_stage_${stageIdx}`), [1, 1], topDownOutChannels, topDownOutChannels, batchNormOptionals)
      : new Convolution(this._withNamePath(`conv_anti_aliasing_stage_${stageIdx}`), [1, 1], topDownOutChannels, topDownOutChannels, 3, batchNormOptionals)
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
    const inputs = x.slice().reverse()
    const shrinkedOutputs = this._channelShrinkConvs
      .map((conv, idx) => tf.relu(conv.apply(inputs[idx])))
    const outputs = [shrinkedOutputs[0]]
    let up = shrinkedOutputs[0]
    for (let idx = 1; idx < shrinkedOutputs.length; idx++) {
      const stageOutput =  shrinkedOutputs[idx]
      const targetShape = [stageOutput.shape[1],  stageOutput.shape[2]] as [number, number]
      if (this._stageStrides === null || this._stageStrides[idx - 1] !== this._stageStrides[idx]) {
        up = up.resizeNearestNeighbor(targetShape)
      }
      up = tf.relu(this._antiAliasingConvs[idx - 1].apply(tf.add(up, stageOutput)))
      outputs.push(up)
    }
    return outputs.reverse()
  }
}
