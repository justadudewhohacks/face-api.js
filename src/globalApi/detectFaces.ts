import { TNetInput } from 'tfjs-image-recognition-base';

import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { DetectAllFacesTask, DetectSingleFaceTask } from './DetectFacesTasks';
import { FaceDetectionOptions } from './types';

export function detectSingleFace(
  input: TNetInput,
  options: FaceDetectionOptions = new SsdMobilenetv1Options()
): DetectSingleFaceTask {
  return new DetectSingleFaceTask(input, options)
}

export function detectAllFaces(
  input: TNetInput,
  options: FaceDetectionOptions = new SsdMobilenetv1Options()
): DetectAllFacesTask {
  return new DetectAllFacesTask(input, options)
}