import { FullFaceDescription } from '../src/classes/FullFaceDescription';
import { euclideanDistance } from '../src/euclideanDistance';
import { BoxAndLandmarksDeltas } from './expectFaceDetectionsWithLandmarks';
import { ExpectedFullFaceDescription, expectPointClose, expectRectClose, sortByFaceDetection } from './utils';

export type FullFaceDescriptionDeltas = BoxAndLandmarksDeltas & {
  maxDescriptorDelta: number
}

export function expectFullFaceDescriptions(
  results: FullFaceDescription[],
  allExpectedFullFaceDescriptions: ExpectedFullFaceDescription[],
  expectedScores: number[],
  deltas: FullFaceDescriptionDeltas
) {

  const expectedFullFaceDescriptions = expectedScores
    .map((score, i) => ({
      score,
      ...allExpectedFullFaceDescriptions[i]
    }))
    .filter(expected => expected.score !== -1)

  const sortedResults = sortByFaceDetection(results)

  expectedFullFaceDescriptions.forEach((expected, i) => {
    const { detection, landmarks, descriptor } = sortedResults[i]
    expect(detection.score - expected.score).toBeLessThan(deltas.maxScoreDelta)
    expectRectClose(detection.box, expected.detection, deltas.maxBoxDelta)
    landmarks.positions.forEach((pt, j) => expectPointClose(pt, expected.landmarks[j], deltas.maxLandmarksDelta))
    expect(euclideanDistance(descriptor, expected.descriptor)).toBeLessThan(deltas.maxDescriptorDelta)
  })
}