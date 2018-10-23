import { TinyFaceDetector } from './TinyFaceDetector';

export * from './TinyFaceDetector';
export * from './TinyFaceDetectorOptions';

export function createTinyFaceDetector(weights: Float32Array) {
  const net = new TinyFaceDetector()
  net.extractWeights(weights)
  return net
}