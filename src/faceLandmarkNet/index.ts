import { FaceLandmark68Net } from './FaceLandmark68Net';

export * from './FaceLandmark68Net';

export class FaceLandmarkNet extends FaceLandmark68Net {}

export function createFaceLandmarkNet(weights: Float32Array) {
  const net = new FaceLandmarkNet()
  net.extractWeights(weights)
  return net
}

export function faceLandmarkNet(weights: Float32Array) {
  console.warn('faceLandmarkNet(weights: Float32Array) will be deprecated in future, use createFaceLandmarkNet instead')
  return createFaceLandmarkNet(weights)
}