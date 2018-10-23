import { IRect } from '../../../src';
import { sortBoxes } from '../../utils';

export const expectedTinyYolov2Boxes: IRect[] = sortBoxes([
  { x: 52, y: 263, width: 106, height: 102 },
  { x: 455, y: 191, width: 103, height: 97 },
  { x: 236, y: 57, width: 90, height: 85 },
  { x: 257, y: 243, width: 86, height: 95 },
  { x: 578, y: 76, width: 86, height: 91 },
  { x: 87, y: 30, width: 92, height: 93 }
])

export const expectedTinyYolov2SeparableConvBoxes: IRect[] = sortBoxes([
  { x: 42, y: 257, width: 111, height: 121 },
  { x: 454, y: 175, width: 104, height: 121 },
  { x: 230, y: 45, width: 94, height: 104 },
  { x: 574, y: 62, width: 88, height: 113 },
  { x: 260, y: 233, width: 82, height: 104 },
  { x: 83, y: 24, width: 85, height: 111 }
])