import { FaceLandmarkNet } from './FaceLandmarkNet';
export * from './FaceLandmarkNet';
export function createFaceLandmarkNet(weights) {
    var net = new FaceLandmarkNet();
    net.extractWeights(weights);
    return net;
}
export function faceLandmarkNet(weights) {
    console.warn('faceLandmarkNet(weights: Float32Array) will be deprecated in future, use createFaceLandmarkNet instead');
    return createFaceLandmarkNet(weights);
}
//# sourceMappingURL=index.js.map