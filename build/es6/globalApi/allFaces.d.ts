import { TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';
import { WithFaceDescriptor, WithFaceDetection, WithFaceLandmarks } from '../factories';
import { IMtcnnOptions } from '../mtcnn/MtcnnOptions';
export declare function allFacesSsdMobilenetv1(input: TNetInput, minConfidence?: number): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare function allFacesTinyYolov2(input: TNetInput, forwardParams?: TfjsImageRecognitionBase.ITinyYolov2Options): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare function allFacesMtcnn(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]>;
export declare const allFaces: typeof allFacesSsdMobilenetv1;
