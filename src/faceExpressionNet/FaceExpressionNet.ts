import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';

export class FaceExpressionNet extends FaceProcessor<FaceFeatureExtractorParams> {

  constructor(faceFeatureExtractor: FaceFeatureExtractor) {
    super('FaceExpressionNet', faceFeatureExtractor)
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