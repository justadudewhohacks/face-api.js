"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var TinyYolov2_1 = require("./TinyYolov2");
tslib_1.__exportStar(require("./TinyYolov2"), exports);
function createTinyYolov2(weights, withSeparableConvs) {
    if (withSeparableConvs === void 0) { withSeparableConvs = true; }
    var net = new TinyYolov2_1.TinyYolov2(withSeparableConvs);
    net.extractWeights(weights);
    return net;
}
exports.createTinyYolov2 = createTinyYolov2;
//# sourceMappingURL=index.js.map