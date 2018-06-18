import { Point } from '../Point';
export function getCenterPoint(pts) {
    return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point(0, 0))
        .div(new Point(pts.length, pts.length));
}
//# sourceMappingURL=getCenterPoint.js.map