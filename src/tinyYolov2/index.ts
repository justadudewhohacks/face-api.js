import { TinyYolov2 } from './TinyYolov2';

export * from './TinyYolov2';

export function createTinyYolov2(weights: Float32Array) {
  const net = new TinyYolov2()
  net.extractWeights(weights)
  return net
}