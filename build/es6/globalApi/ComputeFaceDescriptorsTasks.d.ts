import { TNetInput } from 'tfjs-image-recognition-base';
import { WithFaceDescriptor } from '../factories/WithFaceDescriptor';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { PredictAllAgeAndGenderWithFaceAlignmentTask, PredictSingleAgeAndGenderWithFaceAlignmentTask } from './PredictAgeAndGenderTask';
import { PredictAllFaceExpressionsWithFaceAlignmentTask, PredictSingleFaceExpressionsWithFaceAlignmentTask } from './PredictFaceExpressionsTask';
export declare class ComputeFaceDescriptorsTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>;
    protected input: TNetInput;
    constructor(parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>, input: TNetInput);
}
export declare class ComputeAllFaceDescriptorsTask<TSource extends WithFaceLandmarks<WithFaceDetection<{}>>> extends ComputeFaceDescriptorsTaskBase<WithFaceDescriptor<TSource>[], TSource[]> {
    run(): Promise<WithFaceDescriptor<TSource>[]>;
    withFaceExpressions(): PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceDescriptor<TSource>>;
    withAgeAndGender(): PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceDescriptor<TSource>>;
}
export declare class ComputeSingleFaceDescriptorTask<TSource extends WithFaceLandmarks<WithFaceDetection<{}>>> extends ComputeFaceDescriptorsTaskBase<WithFaceDescriptor<TSource> | undefined, TSource | undefined> {
    run(): Promise<WithFaceDescriptor<TSource> | undefined>;
    withFaceExpressions(): PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceDescriptor<TSource>>;
    withAgeAndGender(): PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceDescriptor<TSource>>;
}
