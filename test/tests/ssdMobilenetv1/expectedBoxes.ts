import { IRect } from '../../../src';
import { sortBoxes } from '../../utils';

export const expectedSsdBoxes: IRect[] = sortBoxes([
  { x: 48, y: 253, width: 104, height: 129 },
  { x: 260, y: 227, width: 76, height: 117 },
  { x: 466, y: 165, width: 88, height: 130 },
  { x: 234, y: 36, width: 84, height: 119 },
  { x: 577, y: 65, width: 84, height: 105 },
  { x: 84, y: 14, width: 79, height: 132 }
])