import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { extendWithFaceExpressions, WithFaceExpressions } from '../factories/WithFaceExpressions';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { extractAllFacesAndComputeResults, extractSingleFaceAndComputeResult } from './extractFacesAndComputeResults';
import { nets } from './nets';
import {
  PredictAllAgeAndGenderWithFaceAlignmentTask,
  PredictSingleAgeAndGenderWithFaceAlignmentTask,
} from './PredictAgeAndGenderTask';

export class PredictFaceExpressionsTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
  constructor(
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>,
    protected input: TNetInput,
    protected extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D>
  ) {
    super()
  }
}

export class PredictAllFaceExpressionsTask<
  TSource extends WithFaceDetection<{}>
> extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource>[], TSource[]> {

  public async run(): Promise<WithFaceExpressions<TSource>[]> {

    const parentResults = await this.parentTask

    const faceExpressionsByFace = await extractAllFacesAndComputeResults<TSource, FaceExpressions[]>(
      parentResults,
      this.input,
      async faces => await Promise.all(faces.map(
        face => nets.faceExpressionNet.predictExpressions(face) as Promise<FaceExpressions>
      )),
      this.extractedFaces
    )

    return parentResults.map(
      (parentResult, i) => extendWithFaceExpressions<TSource>(parentResult, faceExpressionsByFace[i])
    )
  }
}

export class PredictSingleFaceExpressionsTask<
  TSource extends WithFaceDetection<{}>
>  extends PredictFaceExpressionsTaskBase<WithFaceExpressions<TSource> | undefined, TSource | undefined> {

  public async run(): Promise<WithFaceExpressions<TSource> | undefined> {

    const parentResult = await this.parentTask
    if (!parentResult) {
      return
    }

    const faceExpressions = await extractSingleFaceAndComputeResult<TSource, FaceExpressions>(
      parentResult,
      this.input,
      face => nets.faceExpressionNet.predictExpressions(face) as Promise<FaceExpressions>,
      this.extractedFaces
    )

    return extendWithFaceExpressions(parentResult, faceExpressions)
  }
}

export class PredictAllFaceExpressionsWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictAllFaceExpressionsTask<TSource> {

  withAgeAndGender(): PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptors(): ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>> {
    return new ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}

export class PredictSingleFaceExpressionsWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictSingleFaceExpressionsTask<TSource> {

  withAgeAndGender(): PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptor(): ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>> {
    return new ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}