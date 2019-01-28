import * as tf from '@tensorflow/tfjs-core';
import { Point, TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes';
export declare class TinyYolov2 extends TfjsImageRecognitionBase.TinyYolov2 {
    constructor(withSeparableConvs?: boolean);
    readonly withSeparableConvs: boolean;
    readonly anchors: Point[];
    locateFaces(input: TNetInput, forwardParams: TfjsImageRecognitionBase.ITinyYolov2Options): Promise<FaceDetection[]>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: TfjsImageRecognitionBase.TinyYolov2NetParams;
        paramMappings: TfjsImageRecognitionBase.ParamMapping[];
    };
}
