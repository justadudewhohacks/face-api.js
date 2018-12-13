import { TinyFaceFeatureExtractorParams } from 'src/faceFeatureExtractor/types';

import { TinyFaceFeatureExtractor } from '../faceFeatureExtractor/TinyFaceFeatureExtractor';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';

export class FaceLandmark68TinyNet extends FaceLandmark68NetBase<TinyFaceFeatureExtractorParams> {

  constructor(faceFeatureExtractor: TinyFaceFeatureExtractor = new TinyFaceFeatureExtractor()) {
    super('FaceLandmark68TinyNet', faceFeatureExtractor)
  }

  protected getDefaultModelName(): string {
    return 'face_landmark_68_tiny_model'
  }

  protected getClassifierChannelsIn(): number {
    return 128
  }
}