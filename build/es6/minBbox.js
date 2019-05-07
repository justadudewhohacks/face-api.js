import { BoundingBox } from 'tfjs-image-recognition-base';
export function minBbox(pts) {
    var xs = pts.map(function (pt) { return pt.x; });
    var ys = pts.map(function (pt) { return pt.y; });
    var minX = xs.reduce(function (min, x) { return x < min ? x : min; }, Infinity);
    var minY = ys.reduce(function (min, y) { return y < min ? y : min; }, Infinity);
    var maxX = xs.reduce(function (max, x) { return max < x ? x : max; }, 0);
    var maxY = ys.reduce(function (max, y) { return max < y ? y : max; }, 0);
    return new BoundingBox(minX, minY, maxX, maxY);
}
//# sourceMappingURL=minBbox.js.map