import { Point, TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options, TinyYolov2 as TinyYolov2Base } from 'tfjs-tiny-yolov2';

import { FaceDetection } from '../classes';
import {
  BOX_ANCHORS,
  BOX_ANCHORS_SEPARABLE,
  DEFAULT_MODEL_NAME,
  DEFAULT_MODEL_NAME_SEPARABLE_CONV,
  IOU_THRESHOLD,
  MEAN_RGB_SEPARABLE,
} from './const';

export class TinyYolov2 extends TinyYolov2Base {

  constructor(withSeparableConvs: boolean = true) {
    const config = Object.assign({}, {
      withSeparableConvs,
      iouThreshold: IOU_THRESHOLD,
      classes: ['face']
    },
    withSeparableConvs
      ? {
        anchors: BOX_ANCHORS_SEPARABLE,
        meanRgb: MEAN_RGB_SEPARABLE
      }
      : {
        anchors: BOX_ANCHORS,
        withClassScores: true
      }
    )

    super(config)
  }

  public get withSeparableConvs(): boolean {
    return this.config.withSeparableConvs
  }

  public get anchors(): Point[] {
    return this.config.anchors
  }

  public async locateFaces(input: TNetInput, forwardParams: ITinyYolov2Options): Promise<FaceDetection[]> {
    const objectDetections = await this.detect(input, forwardParams)
    return objectDetections.map(det => new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }))
  }

  protected loadQuantizedParams(modelUri: string | undefined) {
    const defaultModelName = this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME
    return super.loadQuantizedParams(modelUri, defaultModelName) as any
  }
}