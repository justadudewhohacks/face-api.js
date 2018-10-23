import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FullFaceDescription } from '../classes/FullFaceDescription';
import { ComposableTask } from './ComposableTask';
export declare class ComputeFaceDescriptorsTaskBase<TReturn, DetectFaceLandmarksReturnType> extends ComposableTask<TReturn> {
    protected detectFaceLandmarksTask: ComposableTask<DetectFaceLandmarksReturnType> | Promise<DetectFaceLandmarksReturnType>;
    protected input: TNetInput;
    constructor(detectFaceLandmarksTask: ComposableTask<DetectFaceLandmarksReturnType> | Promise<DetectFaceLandmarksReturnType>, input: TNetInput);
}
export declare class ComputeAllFaceDescriptorsTask extends ComputeFaceDescriptorsTaskBase<FullFaceDescription[], FaceDetectionWithLandmarks[]> {
    run(): Promise<FullFaceDescription[]>;
}
export declare class ComputeSingleFaceDescriptorTask extends ComputeFaceDescriptorsTaskBase<FullFaceDescription | undefined, FaceDetectionWithLandmarks | undefined> {
    run(): Promise<FullFaceDescription | undefined>;
}
