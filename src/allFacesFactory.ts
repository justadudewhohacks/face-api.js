import { extractFaceTensors } from './extractFaceTensors';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams } from './mtcnn/types';
import { Rect } from './Rect';
import { TNetInput } from './types';

export function allFacesFactory(
  detectionNet: FaceDetectionNet,
  landmarkNet: FaceLandmarkNet,
  computeDescriptors: (input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) => Promise<Float32Array[]>
) {
  return async function(
    input: TNetInput,
    minConfidence: number,
    useBatchProcessing: boolean = false
  ): Promise<FullFaceDescription[]> {

    const detections = await detectionNet.locateFaces(input, minConfidence)

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

export function allFacesMtcnnFactory(
  mtcnn: Mtcnn,
  computeDescriptors: (input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) => Promise<Float32Array[]>
) {
  return async function(
    input: TNetInput,
    mtcnnForwardParams: MtcnnForwardParams,
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