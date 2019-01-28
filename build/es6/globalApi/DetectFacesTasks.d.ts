import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { PredictAllFaceExpressionsTask, PredictSingleFaceExpressionTask } from './PredictFaceExpressionsTask';
import { FaceDetectionOptions } from './types';
export declare class DetectFacesTaskBase<TReturn> extends ComposableTask<TReturn> {
    protected input: TNetInput;
    protected options: FaceDetectionOptions;
    constructor(input: TNetInput, options?: FaceDetectionOptions);
}
export declare class DetectAllFacesTask extends DetectFacesTaskBase<FaceDetection[]> {
    run(): Promise<FaceDetection[]>;
    private runAndExtendWithFaceDetections;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectAllFaceLandmarksTask<WithFaceDetection<{}>>;
    withFaceExpressions(): PredictAllFaceExpressionsTask<WithFaceDetection<{}>>;
}
export declare class DetectSingleFaceTask extends DetectFacesTaskBase<FaceDetection | undefined> {
    run(): Promise<FaceDetection | undefined>;
    private runAndExtendWithFaceDetection;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectSingleFaceLandmarksTask<WithFaceDetection<{}>>;
    withFaceExpressions(): PredictSingleFaceExpressionTask<WithFaceDetection<{}>>;
}
