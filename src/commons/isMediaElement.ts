export function isMediaElement(input: any) {
  return input instanceof HTMLImageElement
    || input instanceof HTMLVideoElement
    || input instanceof HTMLCanvasElement
}