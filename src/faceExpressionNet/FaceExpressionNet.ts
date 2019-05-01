import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput, toNetInput } from 'tfjs-image-recognition-base';

import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';
import { FaceExpressions } from './FaceExpressions';

export class FaceExpressionNet extends FaceProcessor<FaceFeatureExtractorParams> {

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
      .map(probabilites => new FaceExpressions(probabilites as Float32Array))

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