import { IRect } from '../src';
import { FaceDetection } from '../src/classes/FaceDetection';
import { expectRectClose, sortBoxes, sortFaceDetections } from './utils';

export function expectDetectionResults(
  results: FaceDetection[],
  allExpectedFaceDetections: IRect[],
  expectedScores: number[],
  maxBoxDelta: number
) {

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