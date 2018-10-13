import { IRect } from '../../../src';
import { sortBoxes } from '../../utils';

export const expectedTinyFaceDetectorBoxes: IRect[] = sortBoxes([
  { x: 29, y: 264, width: 139, height: 137 },
  { x: 224, y: 240, width: 147, height: 128 },
  { x: 547, y: 81, width: 136, height: 114 },
  { x: 214, y: 53, width: 124, height: 119 },
  { x: 430, y: 183, width: 162, height: 143 },
  { x: 54, y: 33, width: 134, height: 114 }
])

