import { FaceLandmarkNet } from './FaceLandmarkNet';

export * from './FaceLandmarkNet';

export function faceLandmarkNet(weights: Float32Array) {
  const faceLandmarkNet = new FaceLandmarkNet()
  faceLandmarkNet.extractWeights(weights)
  return faceLandmarkNet
}