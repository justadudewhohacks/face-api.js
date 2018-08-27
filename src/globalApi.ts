import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2Types } from 'tfjs-tiny-yolov2';

import { allFacesMtcnnFactory, allFacesSsdMobilenetv1Factory, allFacesTinyYolov2Factory } from './allFacesFactory';
import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks68 } from './classes/FaceLandmarks68';
import { FullFaceDescription } from './classes/FullFaceDescription';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams, MtcnnResult } from './mtcnn/types';
import { TinyYolov2 } from './tinyYolov2/TinyYolov2';

export const detectionNet = new FaceDetectionNet()
export const landmarkNet = new FaceLandmarkNet()
export const recognitionNet = new FaceRecognitionNet()

// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
export const nets = {
  ssdMobilenetv1: detectionNet,
  faceLandmark68Net: landmarkNet,
  faceRecognitionNet: recognitionNet,
  mtcnn: new Mtcnn(),
  tinyYolov2: new TinyYolov2()
}

export function loadSsdMobilenetv1Model(url: string) {
  return nets.ssdMobilenetv1.load(url)
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

export function loadFaceDetectionModel(url: string) {
  return loadSsdMobilenetv1Model(url)
}

export function loadModels(url: string) {
  return Promise.all([
    loadSsdMobilenetv1Model(url),
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
  return nets.ssdMobilenetv1.locateFaces(input, minConfidence, maxResults)
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
  forwardParams: TinyYolov2Types.TinyYolov2ForwardParams
): Promise<FaceDetection[]> {
  return nets.tinyYolov2.locateFaces(input, forwardParams)
}

export type allFacesSsdMobilenetv1Function = (
  input: tf.Tensor | NetInput | TNetInput,
  minConfidence?: number,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]>

export const allFacesSsdMobilenetv1: allFacesSsdMobilenetv1Function = allFacesSsdMobilenetv1Factory(
  nets.ssdMobilenetv1,
  nets.faceLandmark68Net,
  nets.faceRecognitionNet
)

export type allFacesTinyYolov2Function = (
  input: tf.Tensor | NetInput | TNetInput,
  forwardParams?: TinyYolov2Types.TinyYolov2ForwardParams,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]>

export const allFacesTinyYolov2: allFacesTinyYolov2Function = allFacesTinyYolov2Factory(
  nets.tinyYolov2,
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

export const allFaces = allFacesSsdMobilenetv1