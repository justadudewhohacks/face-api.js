import { FaceDetectionWithLandmarks } from '../src/classes/FaceDetectionWithLandmarks';
import { FaceLandmarks } from '../src/classes/FaceLandmarks';
import { FaceLandmarks68 } from '../src/classes/FaceLandmarks68';
import { ExpectedFaceDetectionWithLandmarks, expectPointClose, expectRectClose, sortByFaceDetection } from './utils';

export type BoxAndLandmarksDeltas = {
  maxScoreDelta: number
  maxBoxDelta: number
  maxLandmarksDelta: number
}

export function expectFaceDetectionsWithLandmarks<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68>(
  results: FaceDetectionWithLandmarks<TFaceLandmarks>[],
  allExpectedFullFaceDescriptions: ExpectedFaceDetectionWithLandmarks[],
  expectedScores: number[],
  deltas: BoxAndLandmarksDeltas
) {

  const expectedFullFaceDescriptions = expectedScores
    .map((score, i) => ({
      score,
      ...allExpectedFullFaceDescriptions[i]
    }))
    .filter(expected => expected.score !== -1)

  const sortedResults = sortByFaceDetection(results)

  expectedFullFaceDescriptions.forEach((expected, i) => {
    const { detection, landmarks } = sortedResults[i]
    expect(Math.abs(detection.score - expected.score)).toBeLessThan(deltas.maxScoreDelta)
    expectRectClose(detection.box, expected.detection, deltas.maxBoxDelta)
    landmarks.positions.forEach((pt, j) => expectPointClose(pt, expected.landmarks[j], deltas.maxLandmarksDelta))
  })
}