import { FaceDetectionNet } from './FaceDetectionNet';
export * from './FaceDetectionNet';
export function faceDetectionNet(weights) {
    var net = new FaceDetectionNet();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map