import * as tf from '@tensorflow/tfjs-core';

import { extractFaceTensors } from './extractFaceTensors';
import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceLandmarks } from './faceLandmarkNet/FaceLandmarks';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { NetInput } from './NetInput';
import { TNetInput } from './types';

export function allFacesFactory(
  detectionNet: FaceDetectionNet,
  landmarkNet: FaceLandmarkNet,
  recognitionNet: FaceRecognitionNet
) {
  return async function(
    input: tf.Tensor | NetInput | TNetInput,
    minConfidence: number
  ): Promise<FullFaceDescription[]> {

    const detections = await detectionNet.locateFaces(input, minConfidence)

    const faceTensors = await extractFaceTensors(input, detections)
    const faceLandmarksByFace = await Promise.all(faceTensors.map(
      faceTensor => landmarkNet.detectLandmarks(faceTensor)
    )) as FaceLandmarks[]

    faceTensors.forEach(t => t.dispose())

    const alignedFaceBoxes = await Promise.all(faceLandmarksByFace.map(
      (landmarks, i) => landmarks.align(detections[i].getBox())
    ))
    const alignedFaceTensors = await extractFaceTensors(input, alignedFaceBoxes)

    const descriptors = await Promise.all(alignedFaceTensors.map(
      faceTensor => recognitionNet.computeFaceDescriptor(faceTensor)
    ))
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