import * as tf from '@tensorflow/tfjs-core';

import { allFacesFactory } from './allFacesFactory';
import { FaceDetection } from './FaceDetection';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { getDefaultMtcnnForwardParams } from './mtcnn/getDefaultMtcnnForwardParams';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams, MtcnnResult } from './mtcnn/types';
import { NetInput } from './NetInput';
import { TNetInput } from './types';

export const detectionNet = new FaceDetectionNet()
export const landmarkNet = new FaceLandmarkNet()
export const recognitionNet = new FaceRecognitionNet()

// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
export const nets = {
  ssdMobilenet: detectionNet,
  faceLandmark68Net: landmarkNet,
  faceNet: recognitionNet,
  mtcnn: new Mtcnn()
}

export function loadFaceDetectionModel(url: string) {
  return nets.ssdMobilenet.load(url)
}

export function loadFaceLandmarkModel(url: string) {
  return nets.faceLandmark68Net.load(url)
}

export function loadFaceRecognitionModel(url: string) {
  return nets.faceNet.load(url)
}

export function loadMtcnnModel(url: string) {
  return nets.mtcnn.load(url)
}

export function loadModels(url: string) {
  return Promise.all([
    loadFaceDetectionModel(url),
    loadFaceLandmarkModel(url),
    loadFaceRecognitionModel(url),
    loadMtcnnModel(url)
  ])
}

export function locateFaces(
  input: TNetInput,
  minConfidence?: number,
  maxResults?: number
): Promise<FaceDetection[]> {
  return nets.ssdMobilenet.locateFaces(input, minConfidence, maxResults)
}

export function detectLandmarks(
  input: TNetInput
): Promise<FaceLandmarks68 | FaceLandmarks68[]> {
  return nets.faceLandmark68Net.detectLandmarks(input)
}

export function computeFaceDescriptor(
  input: TNetInput
): Promise<Float32Array | Float32Array[]>  {
  return nets.faceNet.computeFaceDescriptor(input)
}

export function mtcnn(
  input: TNetInput,
  forwardParameters: MtcnnForwardParams = getDefaultMtcnnForwardParams()
): Promise<MtcnnResult[]> {
  return nets.mtcnn.forward(input, forwardParameters)
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