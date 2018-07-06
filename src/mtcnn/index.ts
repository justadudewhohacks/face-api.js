import { Mtcnn } from './Mtcnn';

export * from './Mtcnn';

export function mtcnn(weights: Float32Array) {
  const net = new Mtcnn()
  net.extractWeights(weights)
  return net
}