import { FaceDetectionNet } from './FaceDetectionNet';
export * from './FaceDetectionNet';
export function createFaceDetectionNet(weights) {
    var net = new FaceDetectionNet();
    net.extractWeights(weights);
    return net;
}
export function faceDetectionNet(weights) {
    console.warn('faceDetectionNet(weights: Float32Array) will be deprecated in future, use createFaceDetectionNet instead');
    return createFaceDetectionNet(weights);
}
//# sourceMappingURL=index.js.map