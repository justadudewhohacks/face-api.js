import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from 'tfjs-image-recognition-base';

import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { NetParams } from './types';
import { seperateWeightMaps } from './util';

export class FaceLandmark68Net extends FaceLandmark68NetBase<NetParams> {

  private static classifierNumFilters: number = 256

  private _faceFeatureExtractor: FaceFeatureExtractor


  constructor(faceFeatureExtractor: FaceFeatureExtractor) {
    super('FaceLandmark68Net')
    this._faceFeatureExtractor = faceFeatureExtractor
  }

  public get faceFeatureExtractor(): FaceFeatureExtractor {
    return this._faceFeatureExtractor
  }

  public runNet(input: NetInput | tf.Tensor4D): tf.Tensor2D {

    const { params } = this

    if (!params) {
      throw new Error('FaceLandmark68Net - load model before inference')
    }

    if (!this.faceFeatureExtractor.isLoaded) {
      throw new Error('FaceLandmark68Net - load face feature extractor model before inference')
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

  protected getDefaultModelName(): string {
    return 'face_landmark_68_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {

    const { featureExtractorMap, classifierMap } = seperateWeightMaps(weightMap)

    this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap)

    return extractParamsFromWeigthMap(classifierMap)
  }

  protected extractParams(weights: Float32Array) {

    const classifierWeightSize = 136 * FaceLandmark68Net.classifierNumFilters + 136

    const featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize)
    const classifierWeights = weights.slice(weights.length - classifierWeightSize)

    this.faceFeatureExtractor.extractWeights(featureExtractorWeights)
    return extractParams(classifierWeights, FaceLandmark68Net.classifierNumFilters)
  }
}