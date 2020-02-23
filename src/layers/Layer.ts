import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { reduceSum } from '../utils';

export interface ILayer {
  dispose(): void
  getNumParams(): number
  getParamShapes(): number[][]
  initializeParams(extractWeights: ExtractWeightsFunction): void
  initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void
}

export abstract class Layer<
  TIn extends tf.TensorContainer = tf.Tensor4D,
  TOut extends tf.TensorContainer = tf.Tensor4D
> implements ILayer {

  protected abstract _initializeParams(extractWeights: ExtractWeightsFunction): void
  protected abstract _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void
  protected abstract _apply(x: TIn): TOut
  protected abstract _dispose(): void
  protected abstract _getParamShapes(): number[][]

  private _name: string
  private _isLoaded: boolean

  constructor(name: string) {
    this._name = name
  }

  public get name(): string { return this._name }
  public get isLoaded(): boolean { return this._isLoaded }

  public getNumParams(): number {
    return reduceSum(this._getParamShapes().map(shape => tf.util.sizeFromShape(shape)))
  }

  public getParamShapes(): number[][]{
    return this._getParamShapes()
  }

  public initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._initializeParams(extractWeights)
    this._isLoaded = true
  }

  public initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._initializeParamsFromWeightMap(weightMap)
    this._isLoaded = true
  }

  public dispose(): void {
    this._dispose()
  }

  public apply(x: TIn): TOut {
    if (!this.isLoaded) {
      throw new Error(`Layer.apply failed for '${this._name}': layer params are uninitialized`)
    }
    return tf.tidy(() => this._apply(x))
  }

  protected _withNamePath(name: string): string {
    return `${this.name}/${name}`
  }
}