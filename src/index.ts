import * as tf from '@tensorflow/tfjs-core';

import { euclideanDistance } from './euclideanDistance';
import { faceDetectionNet } from './faceDetectionNet';
import { faceRecognitionNet } from './faceRecognitionNet';
import { normalize } from './normalize';

export {
  euclideanDistance,
  faceDetectionNet,
  faceRecognitionNet,
  normalize,
  tf
}

export * from './utils'