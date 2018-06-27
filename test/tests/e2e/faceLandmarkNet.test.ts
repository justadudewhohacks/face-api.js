import * as faceapi from '../../../src';
import { FaceLandmarks } from '../../../src/faceLandmarkNet/FaceLandmarks';
import { Point } from '../../../src/Point';
import { expectMaxDelta } from '../../utils';

describe('faceLandmarkNet', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/face.png')).blob()
    imgEl = await faceapi.bufferToImage(img)
  })

  describe('uncompressed weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet, faceLandmarkPositions: Point[]

    beforeAll(async () => {
      const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
      const weights = new Float32Array(await res.arrayBuffer())
      faceLandmarkNet = faceapi.faceLandmarkNet(weights)
      faceLandmarkPositions = await (await fetch('base/test/data/faceLandmarkPositions.json')).json()
    })

    it('computes face landmarks', async () => {
      const { width, height } = imgEl

      const result = await faceLandmarkNet.detectLandmarks(imgEl) as FaceLandmarks
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      expect(result.getPositions().map(({ x, y }) => ({ x, y }))).toEqual(faceLandmarkPositions)
    })

  })

  describe('quantized weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet, faceLandmarkPositions: Point[]

    beforeAll(async () => {
      faceLandmarkNet = new faceapi.FaceLandmarkNet()
      await faceLandmarkNet.load('base/weights')
      faceLandmarkPositions = await (await fetch('base/test/data/faceLandmarkPositions.json')).json()
    })

    it('computes face landmarks', async () => {
      const { width, height } = imgEl

      const result = await faceLandmarkNet.detectLandmarks(imgEl) as FaceLandmarks
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositions[i].x, 2)
        expectMaxDelta(y, faceLandmarkPositions[i].y, 2)
      })
    })

  })

})

