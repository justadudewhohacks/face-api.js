"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Mtcnn_1 = require("./Mtcnn");
tslib_1.__exportStar(require("./Mtcnn"), exports);
tslib_1.__exportStar(require("./FaceLandmarks5"), exports);
function createMtcnn(weights) {
    var net = new Mtcnn_1.Mtcnn();
    net.extractWeights(weights);
    return net;
}
exports.createMtcnn = createMtcnn;
//# sourceMappingURL=index.js.map