import * as tf from '@tensorflow/tfjs-core';

import { allFacesFactory } from './allFacesFactory';
import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks } from './faceLandmarkNet/FaceLandmarks';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { NetInput } from './NetInput';
import { TNetInput } from './types';

export const detectionNet = new FaceDetectionNet()
export const landmarkNet = new FaceLandmarkNet()
export const recognitionNet = new FaceRecognitionNet()

export function loadFaceDetectionModel(url: string) {
  return detectionNet.load(url)
}

export function loadFaceLandmarkModel(url: string) {
  return landmarkNet.load(url)
}

export function loadFaceRecognitionModel(url: string) {
  return recognitionNet.load(url)
}

export function loadModels(url: string) {
  return Promise.all([
    loadFaceDetectionModel(url),
    loadFaceLandmarkModel(url),
    loadFaceRecognitionModel(url)
  ])
}

export function locateFaces(
  input: TNetInput,
  minConfidence?: number,
  maxResults?: number
): Promise<FaceDetection[]> {
  return detectionNet.locateFaces(input, minConfidence, maxResults)
}

export function detectLandmarks(
  input: TNetInput
): Promise<FaceLandmarks | FaceLandmarks[]> {
  return landmarkNet.detectLandmarks(input)
}

export function computeFaceDescriptor(
  input: TNetInput
): Promise<Float32Array | Float32Array[]>  {
  return recognitionNet.computeFaceDescriptor(input)
}

export const allFaces: (
  input: tf.Tensor | NetInput | TNetInput,
  minConfidence: number,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]> = allFacesFactory(
  detectionNet,
  landmarkNet,
  recognitionNet
)