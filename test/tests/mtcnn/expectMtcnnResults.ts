import { IPoint, IRect } from '../../../src';
import { FaceDetectionWithLandmarks } from '../../../src/classes/FaceDetectionWithLandmarks';
import { FaceLandmarks5 } from '../../../src/classes/FaceLandmarks5';
import { BoxAndLandmarksDeltas, expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { sortBoxes, sortByDistanceToOrigin } from '../../utils';

export const expectedMtcnnBoxes: IRect[] = sortBoxes([
  { x: 70, y: 21, width: 112, height: 112 },
  { x: 36, y: 250, width: 133, height: 132 },
  { x: 221, y: 43, width: 112, height: 111 },
  { x: 247, y: 231, width: 106, height: 107 },
  { x: 566, y: 67, width: 104, height: 104 },
  { x: 451, y: 176, width: 122, height: 122 }
])

export function expectMtcnnResults(
  results: FaceDetectionWithLandmarks<FaceLandmarks5>[],
  expectedMtcnnFaceLandmarks: IPoint[][],
  expectedScores: number[],
  deltas: BoxAndLandmarksDeltas
) {

  const expectedMtcnnFaceLandmarksSorted = sortByDistanceToOrigin(expectedMtcnnFaceLandmarks, obj => obj[0])
  const expectedResults = expectedMtcnnBoxes
    .map((detection, i) => ({ detection, landmarks: expectedMtcnnFaceLandmarksSorted[i] }))

  return expectFaceDetectionsWithLandmarks<FaceLandmarks5>(results, expectedResults, expectedScores, deltas)
}