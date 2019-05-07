"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function minBbox(pts) {
    var xs = pts.map(function (pt) { return pt.x; });
    var ys = pts.map(function (pt) { return pt.y; });
    var minX = xs.reduce(function (min, x) { return x < min ? x : min; }, Infinity);
    var minY = ys.reduce(function (min, y) { return y < min ? y : min; }, Infinity);
    var maxX = xs.reduce(function (max, x) { return max < x ? x : max; }, 0);
    var maxY = ys.reduce(function (max, y) { return max < y ? y : max; }, 0);
    return new tfjs_image_recognition_base_1.BoundingBox(minX, minY, maxX, maxY);
}
exports.minBbox = minBbox;
//# sourceMappingURL=minBbox.js.map