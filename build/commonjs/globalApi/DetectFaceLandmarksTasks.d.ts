import { TNetInput } from 'tfjs-image-recognition-base';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { PredictAllAgeAndGenderWithFaceAlignmentTask, PredictSingleAgeAndGenderWithFaceAlignmentTask } from './PredictAgeAndGenderTask';
import { PredictAllFaceExpressionsWithFaceAlignmentTask, PredictSingleFaceExpressionsWithFaceAlignmentTask } from './PredictFaceExpressionsTask';
export declare class DetectFaceLandmarksTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>;
    protected input: TNetInput;
    protected useTinyLandmarkNet: boolean;
    constructor(parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>, input: TNetInput, useTinyLandmarkNet: boolean);
    protected readonly landmarkNet: FaceLandmark68Net | FaceLandmark68TinyNet;
}
export declare class DetectAllFaceLandmarksTask<TSource extends WithFaceDetection<{}>> extends DetectFaceLandmarksTaskBase<WithFaceLandmarks<TSource>[], TSource[]> {
    run(): Promise<WithFaceLandmarks<TSource>[]>;
    withFaceExpressions(): PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
    withAgeAndGender(): PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
    withFaceDescriptors(): ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
}
export declare class DetectSingleFaceLandmarksTask<TSource extends WithFaceDetection<{}>> extends DetectFaceLandmarksTaskBase<WithFaceLandmarks<TSource> | undefined, TSource | undefined> {
    run(): Promise<WithFaceLandmarks<TSource> | undefined>;
    withFaceExpressions(): PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
    withAgeAndGender(): PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
    withFaceDescriptor(): ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource, FaceLandmarks68>>;
}
