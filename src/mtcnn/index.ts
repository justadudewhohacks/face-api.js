import { Mtcnn } from './Mtcnn';

export * from './Mtcnn';
export * from './MtcnnOptions';

export function createMtcnn(weights: Float32Array) {
  const net = new Mtcnn()
  net.extractWeights(weights)
  return net
}