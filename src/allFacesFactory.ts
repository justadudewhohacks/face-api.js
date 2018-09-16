import { Point, Rect, TNetInput } from 'tfjs-image-recognition-base';
import { TinyYolov2Types } from 'tfjs-tiny-yolov2';

import { TinyYolov2 } from '.';
import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks68 } from './classes/FaceLandmarks68';
import { FullFaceDescription } from './classes/FullFaceDescription';
import { extractFaces } from './dom';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmark68Net } from './faceLandmarkNet/FaceLandmark68Net';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams } from './mtcnn/types';

function computeDescriptorsFactory(
  recognitionNet: FaceRecognitionNet
) {
  return async function(input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) {
    const alignedFaceCanvases = await extractFaces(input, alignedFaceBoxes)

    const descriptors = useBatchProcessing
      ? await recognitionNet.computeFaceDescriptor(alignedFaceCanvases) as Float32Array[]
      : await Promise.all(alignedFaceCanvases.map(
        canvas => recognitionNet.computeFaceDescriptor(canvas)
      )) as Float32Array[]

    return descriptors
  }
}

function allFacesFactory(
  detectFaces: (input: TNetInput) => Promise<FaceDetection[]>,
  landmarkNet: FaceLandmark68Net,
  recognitionNet: FaceRecognitionNet
) {
  const computeDescriptors = computeDescriptorsFactory(recognitionNet)

  return async function(
    input: TNetInput,
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {

    const detections = await detectFaces(input)
    const faceCanvases = await extractFaces(input, detections)

    const faceLandmarksByFace = useBatchProcessing
      ? await landmarkNet.detectLandmarks(faceCanvases) as FaceLandmarks68[]
      : await Promise.all(faceCanvases.map(
        canvas => landmarkNet.detectLandmarks(canvas)
      )) as FaceLandmarks68[]


    const alignedFaceBoxes = faceLandmarksByFace.map(
      (landmarks, i) => landmarks.align(detections[i].getBox())
    )

    const descriptors = await computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)

    return detections.map((detection, i) =>
      new FullFaceDescription(
        detection,
        faceLandmarksByFace[i].shiftByPoint<FaceLandmarks68>(
          new Point(detection.box.x, detection.box.y)
        ),
        descriptors[i]
      )
    )

  }
}

export function allFacesSsdMobilenetv1Factory(
  ssdMobilenetv1: FaceDetectionNet,
  landmarkNet: FaceLandmark68Net,
  recognitionNet: FaceRecognitionNet
) {
  return async function(
    input: TNetInput,
    minConfidence: number = 0.8,
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {
    const detectFaces = (input: TNetInput) => ssdMobilenetv1.locateFaces(input, minConfidence)
    const allFaces = allFacesFactory(detectFaces, landmarkNet, recognitionNet)
    return allFaces(input, useBatchProcessing)
  }
}

export function allFacesTinyYolov2Factory(
  tinyYolov2: TinyYolov2,
  landmarkNet: FaceLandmark68Net,
  recognitionNet: FaceRecognitionNet
) {
  return async function(
    input: TNetInput,
    forwardParams: TinyYolov2Types.TinyYolov2ForwardParams = {},
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {
    const detectFaces = (input: TNetInput) => tinyYolov2.locateFaces(input, forwardParams)
    const allFaces = allFacesFactory(detectFaces, landmarkNet, recognitionNet)
    return allFaces(input, useBatchProcessing)
  }
}

export function allFacesMtcnnFactory(
  mtcnn: Mtcnn,
  recognitionNet: FaceRecognitionNet
) {
  const computeDescriptors = computeDescriptorsFactory(recognitionNet)

  return async function(
    input: TNetInput,
    mtcnnForwardParams: MtcnnForwardParams = {},
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {

    const results = await mtcnn.forward(input, mtcnnForwardParams)

    const alignedFaceBoxes = results.map(
      ({ faceLandmarks }) => faceLandmarks.align()
    )

    const descriptors = await computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)

    return results.map(({ faceDetection, faceLandmarks }, i) =>
      new FullFaceDescription(
        faceDetection,
        faceLandmarks,
        descriptors[i]
      )
    )

  }
}