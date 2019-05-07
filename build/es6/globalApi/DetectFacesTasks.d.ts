import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { PredictAllAgeAndGenderTask, PredictSingleAgeAndGenderTask } from './PredictAgeAndGenderTask';
import { PredictAllFaceExpressionsTask, PredictSingleFaceExpressionsTask } from './PredictFaceExpressionsTask';
import { FaceDetectionOptions } from './types';
export declare class DetectFacesTaskBase<TReturn> extends ComposableTask<TReturn> {
    protected input: TNetInput;
    protected options: FaceDetectionOptions;
    constructor(input: TNetInput, options?: FaceDetectionOptions);
}
export declare class DetectAllFacesTask extends DetectFacesTaskBase<FaceDetection[]> {
    run(): Promise<FaceDetection[]>;
    private runAndExtendWithFaceDetections;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectAllFaceLandmarksTask<{
        detection: FaceDetection;
    }>;
    withFaceExpressions(): PredictAllFaceExpressionsTask<{
        detection: FaceDetection;
    }>;
    withAgeAndGender(): PredictAllAgeAndGenderTask<{
        detection: FaceDetection;
    }>;
}
export declare class DetectSingleFaceTask extends DetectFacesTaskBase<FaceDetection | undefined> {
    run(): Promise<FaceDetection | undefined>;
    private runAndExtendWithFaceDetection;
    withFaceLandmarks(useTinyLandmarkNet?: boolean): DetectSingleFaceLandmarksTask<{
        detection: FaceDetection;
    }>;
    withFaceExpressions(): PredictSingleFaceExpressionsTask<{
        detection: FaceDetection;
    }>;
    withAgeAndGender(): PredictSingleAgeAndGenderTask<{
        detection: FaceDetection;
    }>;
}
