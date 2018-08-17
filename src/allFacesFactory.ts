import { TinyYolov2 } from '.';
import { extractFaceTensors } from './extractFaceTensors';
import { FaceDetection } from './FaceDetection';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams } from './mtcnn/types';
import { Rect } from './Rect';
import { TinyYolov2ForwardParams } from './tinyYolov2/types';
import { TNetInput } from './types';

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

function allFacesFactory(
  detectFaces: (input: TNetInput) => Promise<FaceDetection[]>,
  landmarkNet: FaceLandmarkNet,
  recognitionNet: FaceRecognitionNet
) {
  const computeDescriptors = computeDescriptorsFactory(recognitionNet)

  return async function(
    input: TNetInput,
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {

    const detections = await detectFaces(input)
    const faceTensors = await extractFaceTensors(input, detections)

    const faceLandmarksByFace = useBatchProcessing
      ? await landmarkNet.detectLandmarks(faceTensors) as FaceLandmarks68[]
      : await Promise.all(faceTensors.map(
        faceTensor => landmarkNet.detectLandmarks(faceTensor)
      )) as FaceLandmarks68[]

    faceTensors.forEach(t => t.dispose())

    const alignedFaceBoxes = faceLandmarksByFace.map(
      (landmarks, i) => landmarks.align(detections[i].getBox())
    )

    const descriptors = await computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)

    return detections.map((detection, i) =>
      new FullFaceDescription(
        detection,
        faceLandmarksByFace[i].shiftByPoint<FaceLandmarks68>(detection.getBox()),
        descriptors[i]
      )
    )

  }
}

export function allFacesSsdMobilenetv1Factory(
  ssdMobilenetv1: FaceDetectionNet,
  landmarkNet: FaceLandmarkNet,
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
  landmarkNet: FaceLandmarkNet,
  recognitionNet: FaceRecognitionNet
) {
  return async function(
    input: TNetInput,
    forwardParams: TinyYolov2ForwardParams = {},
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