import * as tf from '@tensorflow/tfjs-core';
import { TNetInput } from 'tfjs-image-recognition-base';

import { FaceDetection } from '../classes/FaceDetection';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { extractFaces, extractFaceTensors } from '../dom';
import { FaceLandmark68Net } from '../faceLandmarkNet/FaceLandmark68Net';
import { FaceLandmark68TinyNet } from '../faceLandmarkNet/FaceLandmark68TinyNet';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { nets } from './nets';

export class DetectFaceLandmarksTaskBase<ReturnType, DetectFacesReturnType> extends ComposableTask<ReturnType> {
  constructor(
    protected detectFacesTask: ComposableTask<DetectFacesReturnType> | Promise<DetectFacesReturnType>,
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

export class DetectAllFaceLandmarksTask extends DetectFaceLandmarksTaskBase<FaceDetectionWithLandmarks[], FaceDetection[]> {

  public async run(): Promise<FaceDetectionWithLandmarks[]> {

    const detections = await this.detectFacesTask

    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, detections)
      : await extractFaces(this.input, detections)

    const faceLandmarksByFace = await Promise.all(faces.map(
      face => this.landmarkNet.detectLandmarks(face)
    )) as FaceLandmarks68[]

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return detections.map((detection, i) =>
      new FaceDetectionWithLandmarks(detection, faceLandmarksByFace[i])
    )
  }

  withFaceDescriptors(): ComputeAllFaceDescriptorsTask {
    return new ComputeAllFaceDescriptorsTask(this, this.input)
  }
}

export class DetectSingleFaceLandmarksTask extends DetectFaceLandmarksTaskBase<FaceDetectionWithLandmarks | undefined, FaceDetection | undefined> {

  public async run(): Promise<FaceDetectionWithLandmarks | undefined> {

    const detection = await this.detectFacesTask
    if (!detection) {
      return
    }

    const faces: Array<HTMLCanvasElement | tf.Tensor3D> = this.input instanceof tf.Tensor
      ? await extractFaceTensors(this.input, [detection])
      : await extractFaces(this.input, [detection])


    const landmarks = await this.landmarkNet.detectLandmarks(faces[0]) as FaceLandmarks68

    faces.forEach(f => f instanceof tf.Tensor && f.dispose())

    return new FaceDetectionWithLandmarks(
      detection,
      landmarks
    )
  }

  withFaceDescriptor(): ComputeSingleFaceDescriptorTask {
    return new ComputeSingleFaceDescriptorTask(this, this.input)
  }
}