import { Point } from '../classes/Point';

export type TinyYolov2Config = {
  withSeparableConvs: boolean
  iouThreshold: number
  anchors: Point[]
  classes: string[]
  meanRgb?: [number, number, number]
  withClassScores?: boolean,
  filterSizes?: number[]
  isFirstLayerConv2d?: boolean
}

const isNumber = (arg: any) => typeof arg === 'number'

export function validateConfig(config: any) {
  if (!config) {
    throw new Error(`invalid config: ${config}`)
  }

  if (typeof config.withSeparableConvs !== 'boolean') {
    throw new Error(`config.withSeparableConvs has to be a boolean, have: ${config.withSeparableConvs}`)
  }

  if (!isNumber(config.iouThreshold) || config.iouThreshold < 0 || config.iouThreshold > 1.0) {
    throw new Error(`config.iouThreshold has to be a number between [0, 1], have: ${config.iouThreshold}`)
  }

  if (
    !Array.isArray(config.classes)
    || !config.classes.length
    || !config.classes.every((c: any) => typeof c === 'string')
  ) {

    throw new Error(`config.classes has to be an array class names: string[], have: ${JSON.stringify(config.classes)}`)
  }

  if (
    !Array.isArray(config.anchors)
    || !config.anchors.length
    || !config.anchors.map((a: any) => a || {}).every((a: any) => isNumber(a.x) && isNumber(a.y))
  ) {

    throw new Error(`config.anchors has to be an array of { x: number, y: number }, have: ${JSON.stringify(config.anchors)}`)
  }

  if (config.meanRgb && (
    !Array.isArray(config.meanRgb)
    || config.meanRgb.length !== 3
    || !config.meanRgb.every(isNumber)
  )) {

    throw new Error(`config.meanRgb has to be an array of shape [number, number, number], have: ${JSON.stringify(config.meanRgb)}`)
  }
}