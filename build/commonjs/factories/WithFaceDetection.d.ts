import { FaceDetection } from '../classes/FaceDetection';
export declare type WithFaceDetection<TSource> = TSource & {
    detection: FaceDetection;
};
export declare function extendWithFaceDetection<TSource>(sourceObj: TSource, detection: FaceDetection): WithFaceDetection<TSource>;
