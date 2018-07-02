import * as faceapi from '../../../src';
import { FaceLandmarks } from '../../../src/faceLandmarkNet/FaceLandmarks';
import { Point } from '../../../src/Point';
import { expectMaxDelta } from '../../utils';

describe('faceLandmarkNet', () => {

  let imgEl1: HTMLImageElement
  let imgEl2: HTMLImageElement
  let faceLandmarkPositions1: Point[]
  let faceLandmarkPositions2: Point[]

  beforeAll(async () => {
    const img1 = await (await fetch('base/test/images/face1.png')).blob()
    imgEl1 = await faceapi.bufferToImage(img1)
    const img2 = await (await fetch('base/test/images/face2.png')).blob()
    imgEl2 = await faceapi.bufferToImage(img2)
    faceLandmarkPositions1 = await (await fetch('base/test/data/faceLandmarkPositions1.json')).json()
    faceLandmarkPositions2 = await (await fetch('base/test/data/faceLandmarkPositions2.json')).json()
  })

  describe('uncompressed weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
      const weights = new Float32Array(await res.arrayBuffer())
      faceLandmarkNet = faceapi.faceLandmarkNet(weights)
    })

    it('computes face landmarks', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as FaceLandmarks
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositions1[i].x, 0.1)
        expectMaxDelta(y, faceLandmarkPositions1[i].y, 0.1)
      })
    })

    it('computes face landmarks for batch input', async () => {
      const imgEls = [imgEl1, imgEl2]

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2
      ]
      const results = await faceLandmarkNet.detectLandmarks(imgEls) as FaceLandmarks[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)
      results.forEach((result, batchIdx) => {
        const { width, height } = imgEls[batchIdx]
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 0.1)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 0.1)
        })
      })
    })

  })

  describe('quantized weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      faceLandmarkNet = new faceapi.FaceLandmarkNet()
      await faceLandmarkNet.load('base/weights')
    })

    it('computes face landmarks', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as FaceLandmarks
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositions1[i].x, 2)
        expectMaxDelta(y, faceLandmarkPositions1[i].y, 2)
      })
    })

    it('computes face landmarks for batch input', async () => {
      const imgEls = [imgEl1, imgEl2]

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2
      ]
      const results = await faceLandmarkNet.detectLandmarks(imgEls) as FaceLandmarks[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)
      results.forEach((result, batchIdx) => {
        const { width, height } = imgEls[batchIdx]
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 3)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 3)
        })
      })
    })

  })

})

