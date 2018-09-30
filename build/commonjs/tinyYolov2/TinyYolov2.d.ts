import { Point, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2 as TinyYolov2Base, TinyYolov2Types } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
export declare class TinyYolov2 extends TinyYolov2Base {
    constructor(withSeparableConvs?: boolean);
    readonly withSeparableConvs: boolean;
    readonly anchors: Point[];
    locateFaces(input: TNetInput, forwardParams: TinyYolov2Types.TinyYolov2ForwardParams): Promise<FaceDetection[]>;
    protected loadQuantizedParams(modelUri: string | undefined): any;
}
