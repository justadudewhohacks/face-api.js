import { FaceRecognitionNet } from './FaceRecognitionNet';

export * from './FaceRecognitionNet';

export function createFaceRecognitionNet(weights: Float32Array) {
  const net = new FaceRecognitionNet()
  net.extractWeights(weights)
  return net
}

export function faceRecognitionNet(weights: Float32Array) {
  console.warn('faceRecognitionNet(weights: Float32Array) will be deprecated in future, use createFaceRecognitionNet instead')
  return createFaceRecognitionNet(weights)
}