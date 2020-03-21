import * as tf from '@tensorflow/tfjs-core';

import { ExtractWeightsFunction } from '../common';
import { flattenArray } from '../utils';
import { ILayer, Layer } from './Layer';

export abstract class ComposedLayer<
  TIn extends tf.TensorContainer = tf.Tensor4D,
  TOut extends tf.TensorContainer = tf.Tensor4D
> extends Layer<TIn, TOut> {

  protected abstract _getLayers(): ILayer[]

  protected _initializeParams(extractWeights: ExtractWeightsFunction): void {
    this._getLayers().forEach(l => l.initializeParams(extractWeights))
  }

  protected _initializeParamsFromWeightMap(weightMap: tf.NamedTensorMap): void {
    this._getLayers().forEach(l => l.initializeParamsFromWeightMap(weightMap))
  }

  protected _dispose(): void {
    this._getLayers().forEach(l => l.dispose())
  }

  protected _getParamShapes(): number[][] {
    return flattenArray(this._getLayers().map(l => l.getParamShapes())
    )
  }
}