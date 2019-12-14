import * as tf from '@tensorflow/tfjs-core';

import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import { seperateWeightMaps } from '../faceProcessor/util';
import { TinyXception } from '../xception/TinyXception';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { AgeAndGenderPrediction, Gender, NetOutput, NetParams } from './types';
import { NeuralNetwork } from '../NeuralNetwork';
import { NetInput, TNetInput, toNetInput } from '../dom';

export class AgeGenderNet extends NeuralNetwork<NetParams> {

  private _faceFeatureExtractor: TinyXception

  constructor(faceFeatureExtractor: TinyXception = new TinyXception(2)) {
    super('AgeGenderNet')
    this._faceFeatureExtractor = faceFeatureExtractor
  }

  public get faceFeatureExtractor(): TinyXception {
    return this._faceFeatureExtractor
  }

  public runNet(input: NetInput | tf.Tensor4D): NetOutput {

    const { params } = this

    if (!params) {
      throw new Error(`${this._name} - load model before inference`)
    }

    return tf.tidy(() => {
      const bottleneckFeatures = input instanceof NetInput
        ? this.faceFeatureExtractor.forwardInput(input)
        : input

      const pooled = tf.avgPool(bottleneckFeatures, [7, 7], [2, 2], 'valid').as2D(bottleneckFeatures.shape[0], -1)
      const age = fullyConnectedLayer(pooled, params.fc.age).as1D()
      const gender = fullyConnectedLayer(pooled, params.fc.gender)
      return { age, gender }
    })
  }

  public forwardInput(input: NetInput | tf.Tensor4D): NetOutput {
    return tf.tidy(() => {
      const { age, gender } = this.runNet(input)
      return { age, gender: tf.softmax(gender) }
    })
  }

  public async forward(input: TNetInput): Promise<NetOutput> {
    return this.forwardInput(await toNetInput(input))
  }

  public async predictAgeAndGender(input: TNetInput): Promise<AgeAndGenderPrediction | AgeAndGenderPrediction[]> {
    const netInput = await toNetInput(input)
    const out = await this.forwardInput(netInput)

    const ages = tf.unstack(out.age)
    const genders = tf.unstack(out.gender)
    const ageAndGenderTensors = ages.map((ageTensor, i) => ({
      ageTensor,
      genderTensor: genders[i]
    }))

    const predictionsByBatch = await Promise.all(
      ageAndGenderTensors.map(async ({ ageTensor, genderTensor }) => {
        const age = (await ageTensor.data())[0]
        const probMale = (await genderTensor.data())[0]
        const isMale = probMale > 0.5
        const gender = isMale ? Gender.MALE : Gender.FEMALE
        const genderProbability = isMale ? probMale : (1 - probMale)

        ageTensor.dispose()
        genderTensor.dispose()
        return { age, gender, genderProbability }
      })
    )
    out.age.dispose()
    out.gender.dispose()

    return netInput.isBatchInput
      ? predictionsByBatch
      : predictionsByBatch[0]
  }

  protected getDefaultModelName(): string {
    return 'age_gender_model'
  }

  public dispose(throwOnRedispose: boolean = true) {
    this.faceFeatureExtractor.dispose(throwOnRedispose)
    super.dispose(throwOnRedispose)
  }

  public loadClassifierParams(weights: Float32Array) {
    const { params, paramMappings } = this.extractClassifierParams(weights)
    this._params = params
    this._paramMappings = paramMappings
  }

  public extractClassifierParams(weights: Float32Array) {
    return extractParams(weights)
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap) {

    const { featureExtractorMap, classifierMap } = seperateWeightMaps(weightMap)

    this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap)

    return extractParamsFromWeigthMap(classifierMap)
  }

  protected extractParams(weights: Float32Array) {

    const classifierWeightSize = (512 * 1 + 1) + (512 * 2 + 2)

    const featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize)
    const classifierWeights = weights.slice(weights.length - classifierWeightSize)

    this.faceFeatureExtractor.extractWeights(featureExtractorWeights)
    return this.extractClassifierParams(classifierWeights)
  }
}