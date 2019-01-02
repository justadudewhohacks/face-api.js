import { TNetInput } from 'tfjs-image-recognition-base';
import { ITinyYolov2Options, TinyYolov2Options } from 'tfjs-tiny-yolov2';

import { WithFaceDescriptor, WithFaceDetection, WithFaceLandmarks } from '../factories';
import { IMtcnnOptions, MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1';
import { detectAllFaces } from './detectFaces';

// export allFaces API for backward compatibility

export async function allFacesSsdMobilenetv1(
  input: TNetInput,
  minConfidence?: number
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  return await detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence } : {}))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export async function allFacesTinyYolov2(
  input: TNetInput,
  forwardParams: ITinyYolov2Options = {}
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  return await detectAllFaces(input, new TinyYolov2Options(forwardParams))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export async function allFacesMtcnn(
  input: TNetInput,
  forwardParams: IMtcnnOptions = {}
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  return await detectAllFaces(input, new MtcnnOptions(forwardParams))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export const allFaces = allFacesSsdMobilenetv1
