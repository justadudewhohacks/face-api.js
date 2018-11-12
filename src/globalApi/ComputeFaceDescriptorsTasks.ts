import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FullFaceDescription } from '../classes/FullFaceDescription';
import { extractFaces, extractFaceTensors } from '../dom';
import { ComposableTask } from './ComposableTask';
import { nets } from './nets';

export class ComputeFaceDescriptorsTaskBase<TReturn, DetectFaceLandmarksReturnType> extends ComposableTask<TReturn> {
  constructor(
    protected detectFaceLandmarksTask: ComposableTask<DetectFaceLandmarksReturnType> | Promise<DetectFaceLandmarksReturnType>,
    protected input: TNetInput
  ) {
    super()
  }
}

export class ComputeAllFaceDescriptorsTask extends ComputeFaceDescriptorsTaskBase<FullFaceDescription[], FaceDetectionWithLandmarks[]> {

  public async run(): Promise<FullFaceDescription[]> {

    const facesWithLandmarks = await this.detectFaceLandmarksTask

    const alignedRects = facesWithLandmarks.map(({ alignedRect }) => alignedRect)
    const alignedFaces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, alignedRects)
      : await extractFaces(this.input, alignedRects)

    const fullFaceDescriptions = await Promise.all(facesWithLandmarks.map(async ({ detection, landmarks }, i) => {
      const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[i]) as Float32Array
      return new FullFaceDescription(detection, landmarks, descriptor)
    }))

    alignedFaces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return fullFaceDescriptions
  }
}

export class ComputeSingleFaceDescriptorTask extends ComputeFaceDescriptorsTaskBase<FullFaceDescription | undefined, FaceDetectionWithLandmarks | undefined> {

  public async run(): Promise<FullFaceDescription | undefined> {

    const detectionWithLandmarks = await this.detectFaceLandmarksTask
    if (!detectionWithLandmarks) {
      return
    }

    const { detection, landmarks, alignedRect } = detectionWithLandmarks
    const alignedFaces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [alignedRect])
      : await extractFaces(this.input, [alignedRect])
    const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[0]) as Float32Array

    alignedFaces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return new FullFaceDescription(detection, landmarks, descriptor)
  }
}