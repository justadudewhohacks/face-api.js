import { FaceDetectionNet } from './FaceDetectionNet';

export * from './FaceDetectionNet';
export * from './FaceDetection';

export function faceDetectionNet(weights: Float32Array) {
  const net = new FaceDetectionNet()
  net.extractWeights(weights)
  return net
}