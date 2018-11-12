import * as tf from '@tensorflow/tfjs-core';
import { ParamMapping, Point, TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options, TinyYolov2 as TinyYolov2Base, TinyYolov2NetParams } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
export declare class TinyYolov2 extends TinyYolov2Base {
    constructor(withSeparableConvs?: boolean);
    readonly withSeparableConvs: boolean;
    readonly anchors: Point[];
    locateFaces(input: TNetInput, forwardParams: ITinyYolov2Options): Promise<FaceDetection[]>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: TinyYolov2NetParams;
        paramMappings: ParamMapping[];
    };
}
