import { FaceLandmarkNet } from './FaceLandmarkNet';
export * from './FaceLandmarkNet';
export function faceLandmarkNet(weights) {
    var faceLandmarkNet = new FaceLandmarkNet();
    faceLandmarkNet.extractWeights(weights);
    return faceLandmarkNet;
}
//# sourceMappingURL=index.js.map