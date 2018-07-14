"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDefaultMtcnnForwardParams() {
    return {
        minFaceSize: 20,
        scaleFactor: 0.709,
        maxNumScales: 10,
        scoreThresholds: [0.6, 0.7, 0.7]
    };
}
exports.getDefaultMtcnnForwardParams = getDefaultMtcnnForwardParams;
//# sourceMappingURL=getDefaultMtcnnForwardParams.js.map