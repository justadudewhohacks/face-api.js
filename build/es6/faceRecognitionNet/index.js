import { FaceRecognitionNet } from './FaceRecognitionNet';
export * from './FaceRecognitionNet';
export function createFaceRecognitionNet(weights) {
    var net = new FaceRecognitionNet();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map