import { FaceLandmarkNet } from './FaceLandmarkNet';
export * from './FaceLandmarkNet';
export function faceLandmarkNet(weights) {
    var net = new FaceLandmarkNet();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map