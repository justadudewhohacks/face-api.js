"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
function pyramidDown(minFaceSize, scaleFactor, dims) {
    var height = dims[0], width = dims[1];
    var m = config_1.CELL_SIZE / minFaceSize;
    var scales = [];
    var minLayer = Math.min(height, width) * m;
    var exp = 0;
    while (minLayer >= 12) {
        scales.push(m * Math.pow(scaleFactor, exp));
        minLayer = minLayer * scaleFactor;
        exp += 1;
    }
    return scales;
}
exports.pyramidDown = pyramidDown;
//# sourceMappingURL=pyramidDown.js.map