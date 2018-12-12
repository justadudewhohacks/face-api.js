import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { extractFaces, extractFaceTensors } from '../dom';
import { extendWithFaceDescriptor, WithFaceDescriptor } from '../factories/WithFaceDescriptor';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
import { ComposableTask } from './ComposableTask';
import { nets } from './nets';

export class ComputeFaceDescriptorsTaskBase<TReturn, TParentReturn> extends ComposableTask<TReturn> {
  constructor(
    protected parentTask: ComposableTask<TParentReturn> | Promise<TParentReturn>,
    protected input: TNetInput
  ) {
    super()
  }
}

export class ComputeAllFaceDescriptorsTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends ComputeFaceDescriptorsTaskBase<WithFaceDescriptor<TSource>[], TSource[]> {

  public async run(): Promise<WithFaceDescriptor<TSource>[]> {

    const parentResults = await this.parentTask

    const alignedRects = parentResults.map(({ alignedRect }) => alignedRect)
    const alignedFaces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, alignedRects)
      : await extractFaces(this.input, alignedRects)

    const results = await Promise.all(parentResults.map(async (parentResult, i) => {
      const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[i]) as Float32Array
      return extendWithFaceDescriptor<TSource>(parentResult, descriptor)
    }))

    alignedFaces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return results
  }
}

export class ComputeSingleFaceDescriptorTask<
  TSource extends WithFaceLandmarks<WithFaceDetection<{}>>
> extends ComputeFaceDescriptorsTaskBase<WithFaceDescriptor<TSource> | undefined, TSource | undefined> {

  public async run(): Promise<WithFaceDescriptor<TSource> | undefined> {

    const parentResult = await this.parentTask
    if (!parentResult) {
      return
    }

    const { alignedRect } = parentResult
    const alignedFaces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [alignedRect])
      : await extractFaces(this.input, [alignedRect])
    const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[0]) as Float32Array

    alignedFaces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return extendWithFaceDescriptor(parentResult, descriptor)
  }
}