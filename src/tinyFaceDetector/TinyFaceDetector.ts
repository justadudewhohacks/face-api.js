import * as tf from '@tensorflow/tfjs-core';
import { Point, TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';

import { FaceDetection } from '../classes';
import { BOX_ANCHORS, IOU_THRESHOLD, MEAN_RGB } from './const';

export class TinyFaceDetector extends TfjsImageRecognitionBase.TinyYolov2 {

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

  public async locateFaces(input: TNetInput, forwardParams: TfjsImageRecognitionBase.ITinyYolov2Options): Promise<FaceDetection[]> {
    const objectDetections = await this.detect(input, forwardParams)
    return objectDetections.map(det => new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }))
  }

  protected getDefaultModelName(): string {
    return 'tiny_face_detector_model'
  }

  protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): { params: TfjsImageRecognitionBase.TinyYolov2NetParams, paramMappings: TfjsImageRecognitionBase.ParamMapping[] } {
    return super.extractParamsFromWeigthMap(weightMap)
  }
}