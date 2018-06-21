import * as faceapi from '../../src';
import { FaceDetection } from '../../src/faceDetectionNet/FaceDetection';
import { IRect } from '../../src/Rect';

function expectFaceDetectionEquals(result: FaceDetection, score: number, expectedBox: IRect) {
  const { x, y, width, height } = result.getBox()
  expect(result.getScore()).toBeCloseTo(score, 2)
  expect(Math.floor(x)).toEqual(expectedBox.x)
  expect(Math.floor(y)).toEqual(expectedBox.y)
  expect(Math.floor(width)).toEqual(expectedBox.width)
  expect(Math.floor(height)).toEqual(expectedBox.height)
}

describe('faceDetectionNet', () => {

  let faceDetectionNet: faceapi.FaceDetectionNet, imgEl: HTMLImageElement

  beforeAll(async () => {
    const res = await fetch('base/weights/uncompressed/face_detection_model.weights')
    const weights = new Float32Array(await res.arrayBuffer())
    faceDetectionNet = faceapi.faceDetectionNet(weights)

    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  it('scores > 0.8', async () => {
    const { width, height } = imgEl

    const result = await faceDetectionNet.locateFaces(imgEl) as FaceDetection[]
    expect(result.length).toEqual(3)

    result.forEach(res => {
      expect(res.getImageWidth()).toEqual(width)
      expect(res.getImageHeight()).toEqual(height)
    })
    const [d0, d1, d2] = result
    expectFaceDetectionEquals(d0, 0.98, { x: 48, y: 253, width: 104, height: 129 })
    expectFaceDetectionEquals(d1, 0.89, { x: 260, y: 227, width: 76, height: 117 })
    expectFaceDetectionEquals(d2, 0.82, { x: 466, y: 165, width: 88, height: 130 })
  })

  it('scores > 0.5', async () => {
    const { width, height } = imgEl

    const result = await faceDetectionNet.locateFaces(imgEl, 0.5) as FaceDetection[]
    expect(result.length).toEqual(6)

    result.forEach(res => {
      expect(res.getImageWidth()).toEqual(width)
      expect(res.getImageHeight()).toEqual(height)
    })
    const [d0, d1, d2, d3, d4, d5] = result
    expectFaceDetectionEquals(d0, 0.98, { x: 48, y: 253, width: 104, height: 129 })
    expectFaceDetectionEquals(d1, 0.89, { x: 260, y: 227, width: 76, height: 117 })
    expectFaceDetectionEquals(d2, 0.82, { x: 466, y: 165, width: 88, height: 130 })
    expectFaceDetectionEquals(d3, 0.75, { x: 234, y: 36, width: 84, height: 119 })
    expectFaceDetectionEquals(d4, 0.58, { x: 577, y: 65, width: 84, height: 105 })
    expectFaceDetectionEquals(d5, 0.55, { x: 84, y: 14, width: 79, height: 132 })
  })
})