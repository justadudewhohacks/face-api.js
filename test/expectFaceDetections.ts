import { IRect } from '../src';
import { FaceDetection } from '../src/classes/FaceDetection';
import { expectRectClose, sortFaceDetections } from './utils';

export function expectFaceDetections(
  results: FaceDetection[],
  allExpectedFaceDetections: IRect[],
  expectedScores: number[],
  maxScoreDelta: number,
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
    expect(Math.abs(det.score - expectedDetection.score)).toBeLessThan(maxScoreDelta)
    expectRectClose(det.box, expectedDetection, maxBoxDelta)
  })
}