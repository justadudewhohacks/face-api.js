import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { extractFaces, extractFaceTensors } from '../dom';
import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { extendWithFaceLandmarks, WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { nets } from './nets';
import {
  PredictAllAgeAndGenderWithFaceAlignmentTask,
  PredictSingleAgeAndGenderWithFaceAlignmentTask,
} from './PredictAgeAndGenderTask';
import {
  PredictAllFaceExpressionsWithFaceAlignmentTask,
  PredictSingleFaceExpressionsWithFaceAlignmentTask,
} from './PredictFaceExpressionsTask';

export class DetectFaceLandmarksTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
  constructor(
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>,
    protected input: TNetInput,
    protected useTinyLandmarkNet: boolean
  ) {
    super()
  }

  protected get landmarkNet(): FaceLandmark68Net | FaceLandmark68TinyNet {
    return this.useTinyLandmarkNet
      ? nets.faceLandmark68TinyNet
      : nets.faceLandmark68Net
  }
}

export class DetectAllFaceLandmarksTask<
  TSource extends WithFaceDetection<{}>
> extends DetectFaceLandmarksTaskBase<WithFaceLandmarks<TSource>[], TSource[]> {

  public async run(): Promise<WithFaceLandmarks<TSource>[]> {

    const parentResults = await this.parentTask
    const detections = parentResults.map(res => res.detection)

    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, detections)
      : await extractFaces(this.input, detections)

    const faceLandmarksByFace = await Promise.all(faces.map(
      face => this.landmarkNet.detectLandmarks(face)
    )) as FaceLandmarks68[]

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return parentResults.map((parentResult, i) =>
      extendWithFaceLandmarks<TSource>(parentResult, faceLandmarksByFace[i])
    )
  }

  withFaceExpressions(): PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictAllFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withAgeAndGender(): PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictAllAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptors(): ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>> {
    return new ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}

export class DetectSingleFaceLandmarksTask<
  TSource extends WithFaceDetection<{}>
>  extends DetectFaceLandmarksTaskBase<WithFaceLandmarks<TSource> | undefined, TSource | undefined> {

  public async run(): Promise<WithFaceLandmarks<TSource> | undefined> {

    const parentResult = await this.parentTask
    if (!parentResult) {
      return
    }

    const { detection } = parentResult
    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [detection])
      : await extractFaces(this.input, [detection])

    const landmarks = await this.landmarkNet.detectLandmarks(faces[0]) as FaceLandmarks68

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return extendWithFaceLandmarks<TSource>(parentResult, landmarks)
  }

  withFaceExpressions(): PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictSingleFaceExpressionsWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withAgeAndGender(): PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>> {
    return new PredictSingleAgeAndGenderWithFaceAlignmentTask<WithFaceLandmarks<TSource>>(this, this.input)
  }

  withFaceDescriptor(): ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>> {
    return new ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}