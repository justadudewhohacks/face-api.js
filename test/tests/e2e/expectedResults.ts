import * as faceapi from '../../../src';
import { FullFaceDescription } from '../../../src/classes/FullFaceDescription';
import { euclideanDistance } from '../../../src/euclideanDistance';
import {
  ExpectedFullFaceDescription,
  expectMaxDelta,
  expectPointClose,
  expectRectClose,
  sortBoxes,
  sortByDistanceToOrigin,
  sortFullFaceDescriptions,
} from '../../utils';
import { IPoint, IRect } from '../../../src';
import { FaceDetection } from '../../../src/classes/FaceDetection';
import { sortFaceDetections } from '../../utils';

export type BoxAndLandmarksDeltas = {
  maxBoxDelta: number
  maxLandmarksDelta: number
}

export type AllFacesDeltas = BoxAndLandmarksDeltas & {
  maxDescriptorDelta: number
}

export const expectedSsdBoxes = sortBoxes([
  { x: 48, y: 253, width: 104, height: 129 },
  { x: 260, y: 227, width: 76, height: 117 },
  { x: 466, y: 165, width: 88, height: 130 },
  { x: 234, y: 36, width: 84, height: 119 },
  { x: 577, y: 65, width: 84, height: 105 },
  { x: 84, y: 14, width: 79, height: 132 }
])

export const expectedTinyYolov2Boxes = sortBoxes([
  { x: 52, y: 263, width: 106, height: 102 },
  { x: 455, y: 191, width: 103, height: 97 },
  { x: 236, y: 57, width: 90, height: 85 },
  { x: 257, y: 243, width: 86, height: 95 },
  { x: 578, y: 76, width: 86, height: 91 },
  { x: 87, y: 30, width: 92, height: 93 }
])

export const expectedTinyYolov2SeparableConvBoxes = sortBoxes([
  { x: 42, y: 257, width: 111, height: 121 },
  { x: 454, y: 175, width: 104, height: 121 },
  { x: 230, y: 45, width: 94, height: 104 },
  { x: 574, y: 62, width: 88, height: 113 },
  { x: 260, y: 233, width: 82, height: 104 },
  { x: 83, y: 24, width: 85, height: 111 }
])

export const expectedMtcnnBoxes = sortBoxes([
  { x: 70, y: 21, width: 112, height: 112 },
  { x: 36, y: 250, width: 133, height: 132 },
  { x: 221, y: 43, width: 112, height: 111 },
  { x: 247, y: 231, width: 106, height: 107 },
  { x: 566, y: 67, width: 104, height: 104 },
  { x: 451, y: 176, width: 122, height: 122 }
])

export function expectMtcnnResults(
  results: { faceDetection: faceapi.FaceDetection, faceLandmarks: faceapi.FaceLandmarks5 }[],
  expectedMtcnnFaceLandmarks: IPoint[][],
  deltas: BoxAndLandmarksDeltas
) {
  sortByDistanceToOrigin(results, res => res.faceDetection.box).forEach((result, i) => {
    const { faceDetection, faceLandmarks } = result
    expect(faceDetection instanceof faceapi.FaceDetection).toBe(true)
    expect(faceLandmarks instanceof faceapi.FaceLandmarks5).toBe(true)
    expectRectClose(faceDetection.getBox(), expectedMtcnnBoxes[i], deltas.maxBoxDelta)
    faceLandmarks.getPositions().forEach((pt, j) => expectPointClose(pt, expectedMtcnnFaceLandmarks[i][j], deltas.maxLandmarksDelta))
    expectMaxDelta(faceDetection.getScore(), 0.99, 0.01)
  })
}

export function expectDetectionResults(results: FaceDetection[], allExpectedFaceDetections: IRect[], expectedScores: number[], maxBoxDelta: number) {

  const expectedDetections = expectedScores
    .map((score, i) => ({
      score,
      ...allExpectedFaceDetections[i]
    }))
    .filter(expected => expected.score !== -1)

  const sortedResults = sortFaceDetections(results)

  expectedDetections.forEach((expectedDetection, i) => {
    const det = sortedResults[i]
    expect(det.score).toBeCloseTo(expectedDetection.score, 2)
    expectRectClose(det.box, expectedDetection, maxBoxDelta)
  })
}

export function expectAllFacesResults(results: FullFaceDescription[], allExpectedFullFaceDescriptions: ExpectedFullFaceDescription[], expectedScores: number[], deltas: AllFacesDeltas) {

  const expectedFullFaceDescriptions = expectedScores
    .map((score, i) => ({
      score,
      ...allExpectedFullFaceDescriptions[i]
    }))
    .filter(expected => expected.score !== -1)

  const sortedResults = sortFullFaceDescriptions(results)

  expectedFullFaceDescriptions.forEach((expected, i) => {
    const { detection, landmarks, descriptor } = sortedResults[i]
    expect(detection.score).toBeCloseTo(expected.score, 2)
    expectRectClose(detection.box, expected.detection, deltas.maxBoxDelta)
    landmarks.getPositions().forEach((pt, j) => expectPointClose(pt, expected.landmarks[j], deltas.maxLandmarksDelta))
    expect(euclideanDistance(descriptor, expected.descriptor)).toBeLessThan(deltas.maxDescriptorDelta)
  })
}