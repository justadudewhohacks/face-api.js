import * as tf from '@tensorflow/tfjs-core';

import { allFacesFactory, allFacesMtcnnFactory } from './allFacesFactory';
import { extractFaceTensors } from './extractFaceTensors';
import { FaceDetection } from './FaceDetection';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams, MtcnnResult } from './mtcnn/types';
import { NetInput } from './NetInput';
import { Rect } from './Rect';
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
  mtcnn: new Mtcnn()
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
  return nets.faceRecognitionNet.computeFaceDescriptor(input)
}

export function mtcnn(
  input: TNetInput,
  forwardParams: MtcnnForwardParams
): Promise<MtcnnResult[]> {
  return nets.mtcnn.forward(input, forwardParams)
}

export const allFaces: (
  input: tf.Tensor | NetInput | TNetInput,
  minConfidence: number,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]> = allFacesFactory(
  detectionNet,
  landmarkNet,
  computeDescriptorsFactory(nets.faceRecognitionNet)
)

export const allFacesMtcnn: (
  input: tf.Tensor | NetInput | TNetInput,
  mtcnnForwardParams: MtcnnForwardParams,
  useBatchProcessing?: boolean
) => Promise<FullFaceDescription[]> = allFacesMtcnnFactory(
  nets.mtcnn,
  computeDescriptorsFactory(nets.faceRecognitionNet)
)

function computeDescriptorsFactory(
  recognitionNet: FaceRecognitionNet
) {
  return async function(input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) {
    const alignedFaceTensors = await extractFaceTensors(input, alignedFaceBoxes)

    const descriptors = useBatchProcessing
      ? await recognitionNet.computeFaceDescriptor(alignedFaceTensors) as Float32Array[]
      : await Promise.all(alignedFaceTensors.map(
        faceTensor => recognitionNet.computeFaceDescriptor(faceTensor)
      )) as Float32Array[]

    alignedFaceTensors.forEach(t => t.dispose())

    return descriptors
  }
}