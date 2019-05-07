import { TinyFaceDetectorOptions } from '../../../src';

export const withNetArgs = {
  withAllFacesTinyFaceDetector: true,
  withFaceExpressionNet: { quantized: true },
  withAgeGenderNet: { quantized: true }
}

export const  expectedScores = [0.7, 0.82, 0.93, 0.86, 0.79, 0.84]

export const  deltas = {
  maxScoreDelta: 0.05,
  maxBoxDelta: 5,
  maxLandmarksDelta: 10,
  maxDescriptorDelta: 0.2
}

export const faceDetectorOptions = new TinyFaceDetectorOptions({
  inputSize: 416
})