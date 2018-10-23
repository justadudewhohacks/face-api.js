import { Point, TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options, TinyYolov2 as TinyYolov2Base } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
export declare class TinyYolov2 extends TinyYolov2Base {
    constructor(withSeparableConvs?: boolean);
    readonly withSeparableConvs: boolean;
    readonly anchors: Point[];
    locateFaces(input: TNetInput, forwardParams: ITinyYolov2Options): Promise<FaceDetection[]>;
    protected loadQuantizedParams(modelUri: string | undefined): any;
}
