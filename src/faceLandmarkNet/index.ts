import { FaceLandmarkNet } from './FaceLandmarkNet';

export * from './FaceLandmarkNet';

export function createFaceLandmarkNet(weights: Float32Array) {
  const net = new FaceLandmarkNet()
  net.extractWeights(weights)
  return net
}

export function faceLandmarkNet(weights: Float32Array) {
  console.warn('faceLandmarkNet(weights: Float32Array) will be deprecated in future, use createFaceLandmarkNet instead')
  return createFaceLandmarkNet(weights)
}