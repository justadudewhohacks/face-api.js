import * as faceapi from '../../src';
import { FaceDetection } from '../../src/faceDetectionNet/FaceDetection';
import { IRect } from '../../src/Rect';
import { expectMaxDelta } from '../utils';

function expectRectClose(
  result: IRect,
  expectedBox: IRect,
  maxDelta: number
) {
  const { x, y, width, height } = result
  expectMaxDelta(x, expectedBox.x, maxDelta)
  expectMaxDelta(y, expectedBox.y, maxDelta)
  expectMaxDelta(width, expectedBox.width, maxDelta)
  expectMaxDelta(height, expectedBox.height, maxDelta)
}

const expectedBoxes = [
  { x: 48, y: 253, width: 104, height: 129 },
  { x: 260, y: 227, width: 76, height: 117 },
  { x: 466, y: 165, width: 88, height: 130 },
  { x: 234, y: 36, width: 84, height: 119 },
  { x: 577, y: 65, width: 84, height: 105 },
  { x: 84, y: 14, width: 79, height: 132 }
]

describe('faceDetectionNet', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  describe('uncompressed weights', () => {

    let faceDetectionNet: faceapi.FaceDetectionNet

    const expectedScores = [0.98, 0.89, 0.82, 0.75, 0.58, 0.55]
    const maxBoxDelta = 1

    beforeAll(async () => {
      const res = await fetch('base/weights/uncompressed/face_detection_model.weights')
      const weights = new Float32Array(await res.arrayBuffer())
      faceDetectionNet = faceapi.faceDetectionNet(weights)
    })

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl) as FaceDetection[]

      expect(detections.length).toEqual(3)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedBoxes[i], maxBoxDelta)
      })
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, 0.5) as FaceDetection[]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedBoxes[i], maxBoxDelta)
      })
    })

  })

  describe('quantized weights', () => {

    let faceDetectionNet: faceapi.FaceDetectionNet

    const expectedScores = [0.97, 0.88, 0.83, 0.82, 0.59, 0.52]
    const maxBoxDelta = 5

    beforeAll(async () => {
      faceDetectionNet = new faceapi.FaceDetectionNet()
      await faceDetectionNet.load('base/weights')
    })

    it('scores > 0.8', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl) as FaceDetection[]

      expect(detections.length).toEqual(4)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedBoxes[i], maxBoxDelta)
      })
    })

    it('scores > 0.5', async () => {
      const detections = await faceDetectionNet.locateFaces(imgEl, 0.5) as FaceDetection[]

      expect(detections.length).toEqual(6)
      detections.forEach((det, i) => {
        expect(det.getImageWidth()).toEqual(imgEl.width)
        expect(det.getImageHeight()).toEqual(imgEl.height)
        expect(det.getScore()).toBeCloseTo(expectedScores[i], 2)
        expectRectClose(det.getBox(), expectedBoxes[i], maxBoxDelta)
      })
    })

  })

})