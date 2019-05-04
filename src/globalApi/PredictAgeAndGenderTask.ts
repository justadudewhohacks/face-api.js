import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { AgeAndGenderPrediction } from '../ageGenderNet/types';
import { extendWithAge, WithAge } from '../factories/WithAge';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { extendWithGender, WithGender } from '../factories/WithGender';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { extractAllFacesAndComputeResults, extractSingleFaceAndComputeResult } from './extractFacesAndComputeResults';
import { nets } from './nets';
import {
  PredictAllFaceExpressionsWithFaceAlignmentTask,
  PredictSingleFaceExpressionsWithFaceAlignmentTask,
} from './PredictFaceExpressionsTask';

export class PredictAgeAndGenderTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
  constructor(
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>,
    protected input: TNetInput,
    protected extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D>
  ) {
    super()
  }
}

export class PredictAllAgeAndGenderTask<
  TSource extends WithFaceDetection<{}>
> extends PredictAgeAndGenderTaskBase<WithAge<WithGender<TSource>>[], TSource[]> {

  public async run(): Promise<WithAge<WithGender<TSource>>[]> {

    const parentResults = await this.parentTask

    const ageAndGenderByFace = await extractAllFacesAndComputeResults<TSource, AgeAndGenderPrediction[]>(
      parentResults,
      this.input,
      async faces => await Promise.all(faces.map(
        face => nets.ageGenderNet.predictAgeAndGender(face) as Promise<AgeAndGenderPrediction>
      )),
      this.extractedFaces
    )

    return parentResults.map((parentResult, i) => {
      const { age, gender, genderProbability } = ageAndGenderByFace[i]
      return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)
    })
  }
}

export class PredictSingleAgeAndGenderTask<
  TSource extends WithFaceDetection<{}>
>  extends PredictAgeAndGenderTaskBase<WithAge<WithGender<TSource>> | undefined, TSource | undefined> {

  public async run(): Promise<WithAge<WithGender<TSource>> | undefined> {

    const parentResult = await this.parentTask
    if (!parentResult) {
      return
    }

    const { age, gender, genderProbability } = await extractSingleFaceAndComputeResult<TSource, AgeAndGenderPrediction>(
      parentResult,
      this.input,
      face => nets.ageGenderNet.predictAgeAndGender(face) as Promise<AgeAndGenderPrediction>,
      this.extractedFaces
    )

    return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)
  }
}

export class PredictAllAgeAndGenderWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictAllAgeAndGenderTask<TSource> {

  withFaceExpressions(): PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptors(): ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>> {
    return new ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}

export class PredictSingleAgeAndGenderWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictSingleAgeAndGenderTask<TSource> {

  withFaceExpressions(): PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptor(): ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>> {
    return new ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}