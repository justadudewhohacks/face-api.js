import { FaceDetectionNet } from './FaceDetectionNet';

export * from './FaceDetectionNet';

export function createFaceDetectionNet(weights: Float32Array) {
  const net = new FaceDetectionNet()
  net.extractWeights(weights)
  return net
}

export function faceDetectionNet(weights: Float32Array) {
  console.warn('faceDetectionNet(weights: Float32Array) will be deprecated in future, use createFaceDetectionNet instead')
  return createFaceDetectionNet(weights)
}