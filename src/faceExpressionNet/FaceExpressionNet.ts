import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput, toNetInput } from 'tfjs-image-recognition-base';

import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';
import { FaceExpression, faceExpressionLabels, FaceExpressionPrediction } from './types';

export class FaceExpressionNet extends FaceProcessor<FaceFeatureExtractorParams> {

  public static getFaceExpressionLabel(faceExpression: string) {
    const label = faceExpressionLabels[faceExpression]

    if (typeof label !== 'number') {
      throw new Error(`getFaceExpressionLabel - no label for faceExpression: ${faceExpression}`)
    }

    return label
  }

  public static decodeProbabilites(probabilities: number[] | Float32Array): FaceExpressionPrediction[] {
    if (probabilities.length !== 7) {
      throw new Error(`decodeProbabilites - expected probabilities.length to be 7, have: ${probabilities.length}`)
    }

    return (Object.keys(faceExpressionLabels) as FaceExpression[])
      .map(expression => ({ expression, probability: probabilities[faceExpressionLabels[expression]] }))
  }

  constructor(faceFeatureExtractor: FaceFeatureExtractor = new FaceFeatureExtractor()) {
    super('FaceExpressionNet', faceFeatureExtractor)
  }

  public forwardInput(input: NetInput | tf.Tensor4D): tf.Tensor2D {
    return tf.tidy(() => tf.softmax(this.runNet(input)))
  }

  public async forward(input: TNetInput): Promise<tf.Tensor2D> {
    return this.forwardInput(await toNetInput(input))
  }

  public async predictExpressions(input: TNetInput) {
    const netInput = await toNetInput(input)
    const out = await this.forwardInput(netInput)
    const probabilitesByBatch = await Promise.all(tf.unstack(out).map(async t => {
      const data = await t.data()
      t.dispose()
      return data
    }))
    out.dispose()

    const predictionsByBatch = probabilitesByBatch
      .map(propablities => FaceExpressionNet.decodeProbabilites(propablities as Float32Array))

    return netInput.isBatchInput
      ? predictionsByBatch
      : predictionsByBatch[0]
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