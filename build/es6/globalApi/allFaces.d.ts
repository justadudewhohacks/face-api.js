import { TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options } from 'tfjs-tiny-yolov2';
import { FullFaceDescription } from '../classes';
import { IMtcnnOptions } from '../mtcnn/MtcnnOptions';
export declare function allFacesSsdMobilenetv1(input: TNetInput, minConfidence?: number): Promise<FullFaceDescription[]>;
export declare function allFacesTinyYolov2(input: TNetInput, forwardParams?: ITinyYolov2Options): Promise<FullFaceDescription[]>;
export declare function allFacesMtcnn(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<FullFaceDescription[]>;
export declare const allFaces: typeof allFacesSsdMobilenetv1;
