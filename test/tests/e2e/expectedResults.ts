import * as faceapi from '../../../src';
import { Point } from '../../../src/Point';
import { expectMaxDelta, expectPointClose, expectRectClose } from '../../utils';

export const expectedSsdBoxes = [
  { x: 48, y: 253, width: 104, height: 129 },
  { x: 260, y: 227, width: 76, height: 117 },
  { x: 466, y: 165, width: 88, height: 130 },
  { x: 234, y: 36, width: 84, height: 119 },
  { x: 577, y: 65, width: 84, height: 105 },
  { x: 84, y: 14, width: 79, height: 132 }
]

export const expectedMtcnnBoxes = [
  { x: 70, y: 21, width: 112, height: 112 },
  { x: 36, y: 250, width: 133, height: 132 },
  { x: 221, y: 43, width: 112, height: 111 },
  { x: 247, y: 231, width: 106, height: 107 },
  { x: 566, y: 67, width: 104, height: 104 },
  { x: 451, y: 176, width: 122, height: 122 }
]

export const expectedTinyYolov2Boxes = [
  { x: 52, y: 263, width: 106, height: 102 },
  { x: 455, y: 191, width: 103, height: 97 },
  { x: 236, y: 57, width: 90, height: 85 },
  { x: 257, y: 243, width: 86, height: 95 },
  { x: 578, y: 76, width: 86, height: 91 },
  { x: 87, y: 30, width: 92, height: 93 }
]

export const expectedMtcnnFaceLandmarks = [
  [new Point(117, 58), new Point(156, 63), new Point(141, 86), new Point(109, 98), new Point(147, 104)],
  [new Point(82, 292), new Point(134, 304), new Point(104, 330), new Point(72, 342), new Point(120, 353)],
  [new Point(261, 82), new Point(306, 83), new Point(282, 113), new Point(257, 124), new Point(306, 126)],
  [new Point(277, 273), new Point(318, 273), new Point(295, 300), new Point(279, 311), new Point(316, 313)],
  [new Point(607, 110), new Point(645, 115), new Point(626, 138), new Point(601, 144), new Point(639, 150)],
  [new Point(489, 224), new Point(534, 223), new Point(507, 250), new Point(493, 271), new Point(530, 270)]
]


export function expectMtcnnResults(
  results: { faceDetection: faceapi.FaceDetection, faceLandmarks: faceapi.FaceLandmarks5 }[],
  boxOrder: number[],
  maxBoxDelta: number,
  maxLandmarkPointsDelta: number
) {
  results.forEach((result, i) => {
    const { faceDetection, faceLandmarks } = result
    expect(faceDetection instanceof faceapi.FaceDetection).toBe(true)
    expect(faceLandmarks instanceof faceapi.FaceLandmarks5).toBe(true)
    expectRectClose(faceDetection.getBox(), expectedMtcnnBoxes[boxOrder[i]], maxBoxDelta)
    faceLandmarks.getPositions().forEach((pt, j) => expectPointClose(pt, expectedMtcnnFaceLandmarks[boxOrder[i]][j], maxLandmarkPointsDelta))
    expectMaxDelta(faceDetection.getScore(), 0.99, 0.01)
  })
}