import { extractFaceTensors } from './extractFaceTensors';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { TNetInput } from './types';

export function allFacesFactory(
  detectionNet: FaceDetectionNet,
  landmarkNet: FaceLandmarkNet,
  recognitionNet: FaceRecognitionNet
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
    const alignedFaceTensors = await extractFaceTensors(input, alignedFaceBoxes)

    const descriptors = useBatchProcessing
      ? await recognitionNet.computeFaceDescriptor(alignedFaceTensors) as Float32Array[]
      : await Promise.all(alignedFaceTensors.map(
        faceTensor => recognitionNet.computeFaceDescriptor(faceTensor)
      )) as Float32Array[]

    alignedFaceTensors.forEach(t => t.dispose())

    return detections.map((detection, i) =>
      new FullFaceDescription(
        detection,
        faceLandmarksByFace[i].shiftByPoint(detection.getBox()),
        descriptors[i]
      )
    )

  }
}