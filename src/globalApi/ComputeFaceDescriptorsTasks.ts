import { TNetInput } from 'tfjs-image-recognition-base';

import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FullFaceDescription } from '../classes/FullFaceDescription';
import { extractFaces } from '../dom';
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
    const alignedFaceCanvases = await extractFaces(
      this.input,
      facesWithLandmarks.map(({ landmarks }) => landmarks.align())
    )

    return await Promise.all(facesWithLandmarks.map(async ({ detection, landmarks }, i) => {
      const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaceCanvases[i]) as Float32Array
      return new FullFaceDescription(detection, landmarks, descriptor)
    }))
  }
}

export class ComputeSingleFaceDescriptorTask extends ComputeFaceDescriptorsTaskBase<FullFaceDescription | undefined, FaceDetectionWithLandmarks | undefined> {

  public async run(): Promise<FullFaceDescription | undefined> {

    const detectionWithLandmarks = await this.detectFaceLandmarksTask
    if (!detectionWithLandmarks) {
      return
    }

    const { detection, landmarks } = detectionWithLandmarks
    const alignedFaceCanvas = (await extractFaces(this.input, [landmarks.align()]))[0]
    const descriptor = await nets.faceRecognitionNet.computeFaceDescriptor(alignedFaceCanvas) as Float32Array

    return new FullFaceDescription(detection, landmarks, descriptor)
  }
}