import { Point, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2 as TinyYolov2Base, ITinyYolov2Options } from 'tfjs-tiny-yolov2';

import { FaceDetection } from '../classes';
import { BOX_ANCHORS, DEFAULT_MODEL_NAME, IOU_THRESHOLD, MEAN_RGB } from './const';

export class TinyFaceDetector extends TinyYolov2Base {

  constructor() {
    const config = {
      withSeparableConvs: true,
      iouThreshold: IOU_THRESHOLD,
      classes: ['face'],
      anchors: BOX_ANCHORS,
      meanRgb: MEAN_RGB,
      isFirstLayerConv2d: true,
      filterSizes: [3, 16, 32, 64, 128, 256, 512]
    }

    super(config)
  }

  public get anchors(): Point[] {
    return this.config.anchors
  }

  public async locateFaces(input: TNetInput, forwardParams: ITinyYolov2Options): Promise<FaceDetection[]> {
    const objectDetections = await this.detect(input, forwardParams)
    return objectDetections.map(det => new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }))
  }

  protected loadQuantizedParams(modelUri: string | undefined) {
    const defaultModelName = DEFAULT_MODEL_NAME
    return super.loadQuantizedParams(modelUri, defaultModelName) as any
  }
}