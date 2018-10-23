import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { FaceDetectionOptions } from './types';
export declare function detectSingleFace(input: TNetInput, options?: FaceDetectionOptions): DetectSingleFaceTask;
export declare function detectAllFaces(input: TNetInput, options?: FaceDetectionOptions): DetectAllFacesTask;
export declare class DetectFacesTaskBase<TReturn> extends ComposableTask<TReturn> {
    protected input: TNetInput;
    protected options: FaceDetectionOptions;
    constructor(input: TNetInput, options?: FaceDetectionOptions);
}
export declare class DetectAllFacesTask extends DetectFacesTaskBase<FaceDetection[]> {
    run(): Promise<FaceDetection[]>;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectAllFaceLandmarksTask;
}
export declare class DetectSingleFaceTask extends DetectFacesTaskBase<FaceDetection | undefined> {
    run(): Promise<FaceDetection | undefined>;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectSingleFaceLandmarksTask;
}
