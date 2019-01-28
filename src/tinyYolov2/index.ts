import { TinyYolov2 } from './TinyYolov2';

export { TinyYolov2 }

export function createTinyYolov2(weights: Float32Array, withSeparableConvs: boolean = true) {
  const net = new TinyYolov2(withSeparableConvs)
  net.extractWeights(weights)
  return net
}