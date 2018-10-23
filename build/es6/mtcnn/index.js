import { Mtcnn } from './Mtcnn';
export * from './Mtcnn';
export * from './MtcnnOptions';
export function createMtcnn(weights) {
    var net = new Mtcnn();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map