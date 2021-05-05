import { TNetInput } from '../dom';
import { WithFaceDescriptor, WithFaceDetection, WithFaceLandmarks } from '../factories';
import { IMtcnnOptions, MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1';
import { ITinyYolov2Options, TinyYolov2Options } from '../tinyYolov2';
import { detectAllFaces } from './detectFaces';

// export allFaces API for backward compatibility

export async function allFacesSsdMobilenetv1(
  input: TNetInput,
  minConfidence?: number
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  console.warn('allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead')
  return await detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence } : {}))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export async function allFacesTinyYolov2(
  input: TNetInput,
  forwardParams: ITinyYolov2Options = {}
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  console.warn('allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead')
  return await detectAllFaces(input, new TinyYolov2Options(forwardParams))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export async function allFacesMtcnn(
  input: TNetInput,
  forwardParams: IMtcnnOptions = {}
): Promise<WithFaceDescriptor<WithFaceLandmarks<WithFaceDetection<{}>>>[]> {
  console.warn('allFacesMtcnn is deprecated and will be removed soon, use the high level api instead')
  return await detectAllFaces(input, new MtcnnOptions(forwardParams))
    .withFaceLandmarks()
    .withFaceDescriptors()
}

export const allFaces = allFacesSsdMobilenetv1
