import { FaceLandmark68Net } from './FaceLandmark68Net';

export * from './FaceLandmark68Net';
export * from './FaceLandmark68TinyNet';

export class FaceLandmarkNet extends FaceLandmark68Net {}

export function createFaceLandmarkNet(weights: Float32Array) {
  const net = new FaceLandmarkNet()
  net.extractWeights(weights)
  return net
}