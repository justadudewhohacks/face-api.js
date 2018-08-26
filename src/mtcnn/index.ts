import { Mtcnn } from './Mtcnn';

export * from './Mtcnn';

export function createMtcnn(weights: Float32Array) {
  const net = new Mtcnn()
  net.extractWeights(weights)
  return net
}