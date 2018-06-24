"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("../Point");
function getCenterPoint(pts) {
    return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point_1.Point(0, 0))
        .div(new Point_1.Point(pts.length, pts.length));
}
exports.getCenterPoint = getCenterPoint;
//# sourceMappingURL=getCenterPoint.js.map