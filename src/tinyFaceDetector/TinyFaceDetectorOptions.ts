import { ITinyYolov2Options, TinyYolov2Options } from '../tinyYolov2';

export interface ITinyFaceDetectorOptions extends ITinyYolov2Options {}

export class TinyFaceDetectorOptions extends TinyYolov2Options {
  protected _name: string = 'TinyFaceDetectorOptions'
}