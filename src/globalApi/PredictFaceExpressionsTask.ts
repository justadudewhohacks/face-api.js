import { TNetInput } from 'tfjs-image-recognition-base';
import { tf } from 'tfjs-tiny-yolov2';

import { extractFaces, extractFaceTensors } from '../dom';
import { FaceExpressionPrediction } from '../faceExpressionNet/types';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { extendWithFaceExpressions, WithFaceExpressions } from '../factories/WithFaceExpressions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
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

    const detections = parentResults.map(parentResult => parentResult.detection)
    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, detections)
      : await extractFaces(this.input, detections)

    const faceExpressionsByFace = await Promise.all(faces.map(
      face => nets.faceExpressionNet.predictExpressions(face)
    )) as FaceExpressionPrediction[][]

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return parentResults.map(
      (parentResult, i) => extendWithFaceExpressions<TSource>(parentResult, faceExpressionsByFace[i])
    )
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

    const { detection } = parentResult
    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [detection])
      : await extractFaces(this.input, [detection])

    const faceExpressions = await nets.faceExpressionNet.predictExpressions(faces[0]) as FaceExpressionPrediction[]

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return extendWithFaceExpressions(parentResult, faceExpressions)
  }

  withFaceLandmarks(): DetectSingleFaceLandmarksTask<WithFaceExpressions<TSource>> {
    return new DetectSingleFaceLandmarksTask(this, this.input, false)
  }
}