import { Point } from '../Point';

export const INPUT_SIZES = { xs: 224, sm: 320, md: 416, lg: 608 }
export const NUM_CELLS = { xs: 7, sm: 10, md: 13, lg: 19 }
export const NUM_BOXES = 5

export const BOX_ANCHORS = [
  new Point(0.738768, 0.874946),
  new Point(2.42204, 2.65704),
  new Point(4.30971, 7.04493),
  new Point(10.246, 4.59428),
  new Point(12.6868, 11.8741)
]