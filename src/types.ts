export type TMediaElement = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement

export type TNetInputArg = string | TMediaElement

export type TNetInput = TNetInputArg | Array<TNetInputArg>

export type Dimensions = {
  width: number
  height: number
}