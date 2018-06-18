import { Point } from '../Point';

export function getCenterPoint(pts: Point[]): Point {
  return pts.reduce((sum, pt) => sum.add(pt), new Point(0, 0))
    .div(new Point(pts.length, pts.length))
}