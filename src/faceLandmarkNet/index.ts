import { FaceLandmarkNet } from './FaceLandmarkNet';

export * from './FaceLandmarkNet';
export * from './FaceLandmarks';

export function faceLandmarkNet(weights: Float32Array) {
  const net = new FaceLandmarkNet()
  net.extractWeights(weights)
  return net
}