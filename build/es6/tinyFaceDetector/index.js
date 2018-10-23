import { TinyFaceDetector } from './TinyFaceDetector';
export * from './TinyFaceDetector';
export * from './TinyFaceDetectorOptions';
export function createTinyFaceDetector(weights) {
    var net = new TinyFaceDetector();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map