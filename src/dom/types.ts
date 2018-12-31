import { IPoint, IRect } from 'tfjs-tiny-yolov2';

import { WithFaceExpressions } from '../factories/WithFaceExpressions';

export type DrawLandmarksOptions = {
  lineWidth?: number
  color?: string
  drawLines?: boolean
}

export type DrawFaceExpressionsOptions = {
  primaryColor?: string
  secondaryColor?: string
  primaryFontSize?: number
  secondaryFontSize?: number
  minConfidence?: number
}

export type DrawFaceExpressionsInput = WithFaceExpressions<{
  position: IPoint | IRect
}>