import * as tf from '@tensorflow/tfjs-core';

import { FaceDetection } from '../classes/FaceDetection';
import { extractFaces, extractFaceTensors, TNetInput } from '../dom';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceLandmarks, WithFaceLandmarks } from '../factories/WithFaceLandmarks';

export async function extractAllFacesAndComputeResults<TSource extends WithFaceDetection<{}>, TResult>(
  parentResults: TSource[],
  input: TNetInput,
  computeResults: (faces: Array<HTMLCanvasElement | tf.Tensor3D>) => Promise<TResult>,
  extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D> | null,
  getRectForAlignment: (parentResult: WithFaceLandmarks<TSource, any>) => FaceDetection = ({ alignedRect }) => alignedRect
) {
  const faceBoxes = parentResults.map(parentResult =>
    isWithFaceLandmarks(parentResult)
      ? getRectForAlignment(parentResult)
      : parentResult.detection
  )
  const faces: Array<HTMLCanvasElement | tf.Tensor3D> = extractedFaces || (
    input instanceof tf.Tensor
      ? await extractFaceTensors(input, faceBoxes)
      : await extractFaces(input, faceBoxes)
  )

  const results = await computeResults(faces)

  faces.forEach(f => f instanceof tf.Tensor && f.dispose())

  return results
}

export async function extractSingleFaceAndComputeResult<TSource extends WithFaceDetection<{}>, TResult>(
  parentResult: TSource,
  input: TNetInput,
  computeResult: (face: HTMLCanvasElement | tf.Tensor3D) => Promise<TResult>,
  extractedFaces?: Array<HTMLCanvasElement | tf.Tensor3D> | null,
  getRectForAlignment?: (parentResult: WithFaceLandmarks<TSource, any>) => FaceDetection
) {
  return extractAllFacesAndComputeResults<TSource, TResult>(
    [parentResult],
    input,
    async faces => computeResult(faces[0]),
    extractedFaces,
    getRectForAlignment
  )
}