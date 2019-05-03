import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { extractFaces, extractFaceTensors } from '../dom';
import { FaceExpressions } from '../faceExpressionNet/FaceExpressions';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { extendWithFaceExpressions, WithFaceExpressions } from '../factories/WithFaceExpressions';
import { isWithFaceLandmarks, WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { nets } from './nets';

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

    const faceBoxes = parentResults.map(
      parentResult => isWithFaceLandmarks(parentResult) ? parentResult.alignedRect : parentResult.detection
    )
    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, faceBoxes)
      : await extractFaces(this.input, faceBoxes)

    const faceExpressionsByFace = await Promise.all(faces.map(
      face => nets.faceExpressionNet.predictExpressions(face)
    )) as FaceExpressions[]

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

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

    const faceBox = isWithFaceLandmarks(parentResult) ? parentResult.alignedRect : parentResult.detection
    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [faceBox])
      : await extractFaces(this.input, [faceBox])

    const faceExpressions = await nets.faceExpressionNet.predictExpressions(faces[0]) as FaceExpressions

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return extendWithFaceExpressions(parentResult, faceExpressions)
  }
}

export class PredictAllFaceExpressionsWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictAllFaceExpressionsTask<TSource> {

  withFaceDescriptors(): ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>> {
    return new ComputeAllFaceDescriptorsTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}

export class PredictSingleFaceExpressionsWithFaceAlignmentTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends PredictSingleFaceExpressionsTask<TSource> {

  withFaceDescriptor(): ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>> {
    return new ComputeSingleFaceDescriptorTask<WithFaceLandmarks<TSource>>(this, this.input)
  }
}