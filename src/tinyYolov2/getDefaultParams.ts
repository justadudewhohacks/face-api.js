import { SizeType, TinyYolov2ForwardParams } from './types';

export function getDefaultParams(params: TinyYolov2ForwardParams) {
  return Object.assign(
    {},
    {
      inputSize: SizeType.MD,
      scoreThreshold: 0.5
    },
    params
  )
}