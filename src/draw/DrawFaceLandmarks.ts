import { IPoint } from '../classes';
import { FaceLandmarks } from '../classes/FaceLandmarks';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { getContext2dOrThrow } from '../dom/getContext2dOrThrow';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceLandmarks, WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { drawContour } from './drawContour';

export interface IDrawFaceLandmarksOptions {
  drawLines?: boolean
  drawPoints?: boolean
  lineWidth?: number
  pointSize?: number
  lineColor?: string
  pointColor?: string
}

export class DrawFaceLandmarksOptions {
  public drawLines: boolean
  public drawPoints: boolean
  public lineWidth: number
  public pointSize: number
  public lineColor: string
  public pointColor: string

  constructor(options: IDrawFaceLandmarksOptions = {}) {
    const { drawLines = true, drawPoints = true, lineWidth, lineColor, pointSize, pointColor } = options
    this.drawLines = drawLines
    this.drawPoints = drawPoints
    this.lineWidth = lineWidth || 1
    this.pointSize = pointSize || 2
    this.lineColor = lineColor || 'rgba(0, 255, 255, 1)'
    this.pointColor = pointColor || 'rgba(255, 0, 255, 1)'
  }
}

export class DrawFaceLandmarks {
  public faceLandmarks: FaceLandmarks
  public options: DrawFaceLandmarksOptions

  constructor(
    faceLandmarks: FaceLandmarks,
    options: IDrawFaceLandmarksOptions = {}
  ) {
    this.faceLandmarks = faceLandmarks
    this.options = new DrawFaceLandmarksOptions(options)
  }

  draw(canvasArg: string | HTMLCanvasElement | CanvasRenderingContext2D) {
    const ctx = getContext2dOrThrow(canvasArg)

    const { drawLines, drawPoints, lineWidth, lineColor, pointSize, pointColor } = this.options

    if (drawLines && this.faceLandmarks instanceof FaceLandmarks68) {
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth
      drawContour(ctx, this.faceLandmarks.getJawOutline())
      drawContour(ctx, this.faceLandmarks.getLeftEyeBrow())
      drawContour(ctx, this.faceLandmarks.getRightEyeBrow())
      drawContour(ctx, this.faceLandmarks.getNose())
      drawContour(ctx, this.faceLandmarks.getLeftEye(), true)
      drawContour(ctx, this.faceLandmarks.getRightEye(), true)
      drawContour(ctx, this.faceLandmarks.getMouth(), true)
    }

    if (drawPoints) {
      ctx.strokeStyle = pointColor
      ctx.fillStyle = pointColor

      const drawPoint = (pt: IPoint) => {
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, pointSize, 0, 2 * Math.PI)
        ctx.fill()
      }
      this.faceLandmarks.positions.forEach(drawPoint)
    }
  }
}

export type DrawFaceLandmarksInput = FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>>

export function drawFaceLandmarks(
  canvasArg: string | HTMLCanvasElement,
  faceLandmarks: DrawFaceLandmarksInput | Array<DrawFaceLandmarksInput>
) {
  const faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks]
  faceLandmarksArray.forEach(f => {
    const landmarks = f instanceof FaceLandmarks
      ? f
      : (isWithFaceLandmarks(f) ? f.landmarks : undefined)
    if (!landmarks) {
      throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof')
    }

    new DrawFaceLandmarks(landmarks).draw(canvasArg)
  })
}