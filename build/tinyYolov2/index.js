import { TinyYolov2 } from './TinyYolov2';
export * from './TinyYolov2';
export function createTinyYolov2(weights, withSeparableConvs) {
    if (withSeparableConvs === void 0) { withSeparableConvs = true; }
    var net = new TinyYolov2(withSeparableConvs);
    net.extractWeights(weights);
    return net;
}
//# sourceMappingURL=index.js.map