import * as tf from '@tensorflow/tfjs-core';

import { allFacesFactory, allFacesMtcnnFactory } from './allFacesFactory';
import { FaceDetection } from './FaceDetection';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams, MtcnnResult } from './mtcnn/types';
import { NetInput } from './NetInput';
import { TinyYolov2 } from './tinyYolov2/TinyYolov2';
import { TinyYolov2ForwardParams } from './tinyYolov2/types';
import { TNetInput } from './types';

export const detectionNet = new FaceDetectionNet()
export const landmarkNet = new FaceLandmarkNet()
export const recognitionNet = new FaceRecognitionNet()

// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
export const nets = {
  ssdMobilenet: detectionNet,
  faceLandmark68Net: landmarkNet,
  faceRecognitionNet: recognitionNet,
  mtcnn: new Mtcnn(),
  tinyYolov2: new TinyYolov2()
}

export function loadFaceDetectionModel(url: string) {
  return nets.ssdMobilenet.load(url)
}

export function loadFaceLandmarkModel(url: string) {
  return nets.faceLandmark68Net.load(url)
}

export function loadFaceRecognitionModel(url: string) {
  return nets.faceRecognitionNet.load(url)
}

export function loadMtcnnModel(url: string) {
  return nets.mtcnn.load(url)
}

export function loadTinyYolov2Model(url: string) {
  return nets.tinyYolov2.load(url)
}

export function loadModels(url: string) {
  return Promise.all([
    loadFaceDetectionModel(url),
    loadFaceLandmarkModel(url),
    loadFaceRecognitionModel(url),
    loadMtcnnModel(url),
    loadTinyYolov2Model(url)
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
  return nets.faceRecognitionNet.computeFaceDescriptor(input)
}

export function mtcnn(
  input: TNetInput,
  forwardParams: MtcnnForwardParams
): Promise<MtcnnResult[]> {
  return nets.mtcnn.forward(input, forwardParams)
}

export function tinyYolov2(
  input: TNetInput,
  forwardParams: TinyYolov2ForwardParams
): Promise<FaceDetection[]> {
  return nets.tinyYolov2.locateFaces(input, forwardParams)
}

export type allFacesFunction = (
  input: tf.Tensor | NetInput | TNetInput,
  minConfidence?: number,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]>

export const allFaces: allFacesFunction = allFacesFactory(
  nets.ssdMobilenet,
  nets.faceLandmark68Net,
  nets.faceRecognitionNet
)

export type allFacesMtcnnFunction = (
  input: tf.Tensor | NetInput | TNetInput,
  mtcnnForwardParams?: MtcnnForwardParams,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]>

export const allFacesMtcnn: allFacesMtcnnFunction = allFacesMtcnnFactory(
  nets.mtcnn,
  nets.faceRecognitionNet
)