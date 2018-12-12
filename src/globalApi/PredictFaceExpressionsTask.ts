import { TNetInput } from 'tfjs-image-recognition-base';

import { WithFaceDetection } from '../factories/WithFaceDetection';
import { extendWithFaceExpressions, WithFaceExpressions } from '../factories/WithFaceExpressions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';

export class PredictFaceExpressionsTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
  constructor(
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>,
    protected input: TNetInput
  ) {
    super()
  }
}

export class PredictAllFaceExpressionsTask<
  TSource extends WithFaceDetection<{}>
> extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource>[], TSource[]> {

  public async run(): Promise<WithFaceExpressions<TSource>[]> {

    const parentResults = await this.parentTask

    // TODO: implement me

    return parentResults.map(parentResult => extendWithFaceExpressions<TSource>(parentResult, []))
  }

  withFaceLandmarks(): DetectAllFaceLandmarksTask<WithFaceExpressions<TSource>> {
    return new DetectAllFaceLandmarksTask(this, this.input, false)
  }
}

export class PredictSingleFaceExpressionTask<
  TSource extends WithFaceDetection<{}>
>  extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource> | undefined, TSource | undefined> {

  public async run(): Promise<WithFaceExpressions<TSource> | undefined> {

    const parentResult = await this.parentTask
    if (!parentResult) {
      return
    }

    // TODO: implement me

    return extendWithFaceExpressions(parentResult, [])
  }

  withFaceLandmarks(): DetectSingleFaceLandmarksTask<WithFaceExpressions<TSource>> {
    return new DetectSingleFaceLandmarksTask(this, this.input, false)
  }
}