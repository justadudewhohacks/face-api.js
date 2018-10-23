import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
export declare class DetectFaceLandmarksTaskBase<ReturnType, DetectFacesReturnType> extends ComposableTask<ReturnType> {
    protected detectFacesTask: ComposableTask<DetectFacesReturnType> | Promise<DetectFacesReturnType>;
    protected input: TNetInput;
    protected useTinyLandmarkNet: boolean;
    constructor(detectFacesTask: ComposableTask<DetectFacesReturnType> | Promise<DetectFacesReturnType>, input: TNetInput, useTinyLandmarkNet: boolean);
    protected readonly landmarkNet: FaceLandmark68Net | FaceLandmark68TinyNet;
}
export declare class DetectAllFaceLandmarksTask extends DetectFaceLandmarksTaskBase<FaceDetectionWithLandmarks[], FaceDetection[]> {
    run(): Promise<FaceDetectionWithLandmarks[]>;
    withFaceDescriptors(): ComputeAllFaceDescriptorsTask;
}
export declare class DetectSingleFaceLandmarksTask extends DetectFaceLandmarksTaskBase<FaceDetectionWithLandmarks | undefined, FaceDetection | undefined> {
    run(): Promise<FaceDetectionWithLandmarks | undefined>;
    withFaceDescriptor(): ComputeSingleFaceDescriptorTask;
}
