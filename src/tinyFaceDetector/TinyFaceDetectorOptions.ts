import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

export interface ITinyFaceDetectorOptions extends TfjsImageRecognitionBase.ITinyYolov2Options {}

export class TinyFaceDetectorOptions extends TfjsImageRecognitionBase.TinyYolov2Options {
  protected _name: string = 'TinyFaceDetectorOptions'
}