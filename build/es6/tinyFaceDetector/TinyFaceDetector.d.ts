import { Point, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2 as TinyYolov2Base, ITinyYolov2Options } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
export declare class TinyFaceDetector extends TinyYolov2Base {
    constructor();
    readonly anchors: Point[];
    locateFaces(input: TNetInput, forwardParams: ITinyYolov2Options): Promise<FaceDetection[]>;
    protected loadQuantizedParams(modelUri: string | undefined): any;
}
