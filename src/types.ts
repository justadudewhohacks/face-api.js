export type TMediaElement = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement

export type TNetInputArg = string | TMediaElement

export type TNetInput = TNetInputArg | Array<TNetInputArg>

export type Dimensions = {
  width: number
  height: number
}

export type DrawBoxOptions = {
  lineWidth?: number
  color?: string
}

export type DrawTextOptions = {
  lineWidth?: number
  fontSize?: number
  fontStyle?: string
  color?: string
}

export type DrawLandmarksOptions = {
  lineWidth?: number
  color?: string
}

export type DrawOptions = {
  lineWidth: number
  fontSize: number
  fontStyle: string
  color: string
}