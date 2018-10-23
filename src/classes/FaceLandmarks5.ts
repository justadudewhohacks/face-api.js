import { getCenterPoint, Point } from 'tfjs-image-recognition-base';

import { FaceLandmarks } from './FaceLandmarks';

export class FaceLandmarks5 extends FaceLandmarks {

  protected getRefPointsForAlignment(): Point[] {
    const pts = this.positions
    return [
      pts[0],
      pts[1],
      getCenterPoint([pts[3], pts[4]])
    ]
  }
}