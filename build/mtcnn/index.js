import { Mtcnn } from './Mtcnn';
export * from './Mtcnn';
export function createMtcnn(weights) {
    var net = new Mtcnn();
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map