import { TNetInput } from 'tfjs-image-recognition-base';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceExpressions } from '../factories/WithFaceExpressions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
export declare class PredictFaceExpressionsTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>;
    protected input: TNetInput;
    constructor(parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>, input: TNetInput);
}
export declare class PredictAllFaceExpressionsTask<TSource extends WithFaceDetection<{}>> extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource>[], TSource[]> {
    run(): Promise<WithFaceExpressions<TSource>[]>;
    withFaceLandmarks(): DetectAllFaceLandmarksTask<WithFaceExpressions<TSource>>;
}
export declare class PredictSingleFaceExpressionTask<TSource extends WithFaceDetection<{}>> extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource> | undefined, TSource | undefined> {
    run(): Promise<WithFaceExpressions<TSource> | undefined>;
    withFaceLandmarks(): DetectSingleFaceLandmarksTask<WithFaceExpressions<TSource>>;
}
