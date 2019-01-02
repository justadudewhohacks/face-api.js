import { TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options } from 'tfjs-tiny-yolov2';
import { WithFaceDescriptor, WithFaceDetection, WithFaceLandmarks } from '../factories';
import { IMtcnnOptions } from '../mtcnn/MtcnnOptions';
export declare function allFacesSsdMobilenetv1(input: TNetInput, minConfidence?: number): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare function allFacesTinyYolov2(input: TNetInput, forwardParams?: ITinyYolov2Options): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare function allFacesMtcnn(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare const allFaces: typeof allFacesSsdMobilenetv1;
