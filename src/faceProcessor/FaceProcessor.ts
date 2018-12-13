import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork } from 'tfjs-image-recognition-base';

import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import {
  FaceFeatureExtractorParams,
  IFaceFeatureExtractor,
  TinyFaceFeatureExtractorParams,
} from '../faceFeatureExtractor/types';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { NetParams } from './types';
import { seperateWeightMaps } from './util';

export abstract class FaceProcessor<
  TExtractorParams extends FaceFeatureExtractorParams | TinyFaceFeatureExtractorParams
>
  extends NeuralNetwork<NetParams> {

  protected _faceFeatureExtractor: IFaceFeatureExtractor<TExtractorParams>

  constructor(_name: string, faceFeatureExtractor: IFaceFeatureExtractor<TExtractorParams>) {
    super(_name)
    this._faceFeatureExtractor = faceFeatureExtractor
  }

  public get faceFeatureExtractor(): IFaceFeatureExtractor<TExtractorParams> {
    return this._faceFeatureExtractor
  }

  protected abstract getDefaultModelName(): string
  protected abstract getClassifierChannelsIn(): number
  protected abstract getClassifierChannelsOut(): number

  public runNet(input: NetInput | tf.Tensor4D): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error(`${this._name} - load model before inference`)
    }

    return tf.tidy(() => {
      const bottleneckFeatures = input instanceof NetInput
        ? this.faceFeatureExtractor.forward(input)
        : input
      return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc)
    })
  }

  public dispose(throwOnRedispose: boolean = true) {
    this.faceFeatureExtractor.dispose(throwOnRedispose)
    super.dispose(throwOnRedispose)
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {

    const { featureExtractorMap, classifierMap } = seperateWeightMaps(weightMap)

    this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap)

    return extractParamsFromWeigthMap(classifierMap)
  }

  protected extractParams(weights: Float32Array) {

    const cIn = this.getClassifierChannelsIn()
    const cOut = this.getClassifierChannelsOut()
    const classifierWeightSize = (cOut * cIn )+ cOut

    const featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize)
    const classifierWeights = weights.slice(weights.length - classifierWeightSize)

    this.faceFeatureExtractor.extractWeights(featureExtractorWeights)
    return extractParams(classifierWeights, cIn, cOut)
  }
}