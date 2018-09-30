import { FaceRecognitionNet } from './FaceRecognitionNet';
export * from './FaceRecognitionNet';
export function createFaceRecognitionNet(weights) {
    var net = new FaceRecognitionNet();
    net.extractWeights(weights);
    return net;
}
export function faceRecognitionNet(weights) {
    console.warn('faceRecognitionNet(weights: Float32Array) will be deprecated in future, use createFaceRecognitionNet instead');
    return createFaceRecognitionNet(weights);
}
//# sourceMappingURL=index.js.map