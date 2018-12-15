import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput, toNetInput } from 'tfjs-image-recognition-base';

import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';
import { emotionLabels } from './types';

export class FaceExpressionNet extends FaceProcessor<FaceFeatureExtractorParams> {

  public static getEmotionLabel(emotion: string) {
    const label = emotionLabels[emotion]

    if (typeof label !== 'number') {
      throw new Error(`getEmotionLabel - no label for emotion: ${emotion}`)
    }

    return label
  }

  public static decodeEmotions(probabilities: number[] | Float32Array) {
    if (probabilities.length !== 7) {
      throw new Error(`decodeEmotions - expected probabilities.length to be 7, have: ${probabilities.length}`)
    }

    return Object.keys(emotionLabels).map(label => ({ label, probability: probabilities[emotionLabels[label]] }))
  }

  constructor(faceFeatureExtractor: FaceFeatureExtractor = new FaceFeatureExtractor()) {
    super('FaceExpressionNet', faceFeatureExtractor)
  }

  public runNet(input: NetInput | tf.Tensor4D): tf.Tensor2D {
    return tf.tidy(() => {
      const out = super.runNet(input)
      return tf.softmax(out)
    })
  }

  public forwardInput(input: NetInput | tf.Tensor4D): tf.Tensor2D {
    return tf.tidy(() => this.runNet(input))
  }

  public async forward(input: TNetInput): Promise<tf.Tensor2D> {
    return this.forwardInput(await toNetInput(input))
  }

  public async predictExpressions(input: TNetInput) {
    const netInput = await toNetInput(input)
    const out = await this.forwardInput(netInput)
    const probabilitesByBatch = await Promise.all(tf.unstack(out).map(t => t.data()))
    out.dispose()

    const predictionsByBatch = probabilitesByBatch
      .map(propablities => {
        const predictions = {}
        FaceExpressionNet.decodeEmotions(propablities as Float32Array)
          .forEach(({ label, probability }) => {
            predictions[label] = probability
          })
        return predictions
      })

    return netInput.isBatchInput
      ? predictionsByBatch
      : predictionsByBatch[0]
  }

  public dispose(throwOnRedispose: boolean = true) {
    this.faceFeatureExtractor.dispose(throwOnRedispose)
    super.dispose(throwOnRedispose)
  }

  protected getDefaultModelName(): string {
    return 'face_expression_model'
  }

  protected getClassifierChannelsIn(): number {
    return 256
  }

  protected getClassifierChannelsOut(): number {
    return 7
  }
}