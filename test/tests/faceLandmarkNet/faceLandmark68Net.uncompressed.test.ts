import { Point } from '../../../src';
import { FaceLandmarks68 } from '../../../src/classes/FaceLandmarks68';
import { getTestEnv } from '../../env';
import { describeWithBackend, describeWithNets, expectPointClose } from '../../utils';

describeWithBackend('faceLandmark68Net, uncompressed', () => {

  let imgEl1: HTMLImageElement
  let imgElRect: HTMLImageElement
  let faceLandmarkPositions1: Point[]
  let faceLandmarkPositionsRect: Point[]

  beforeAll(async () => {
    imgEl1 = await getTestEnv().loadImage('test/images/face1.png')
    imgElRect = await getTestEnv().loadImage('test/images/face_rectangular.png')
    faceLandmarkPositions1 = await getTestEnv().loadJson<Point[]>('test/data/faceLandmarkPositions1.json')
    faceLandmarkPositionsRect = await getTestEnv().loadJson<Point[]>('test/data/faceLandmarkPositionsRect.json')
  })

  describeWithNets('uncompressed weights', { withFaceLandmark68Net: { quantized: false } }, ({ faceLandmark68Net }) => {

    it('computes face landmarks for squared input', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmark68Net.detectLandmarks(imgEl1) as FaceLandmarks68
      expect(result.imageWidth).toEqual(width)
      expect(result.imageHeight).toEqual(height)
      expect(result.shift.x).toEqual(0)
      expect(result.shift.y).toEqual(0)
      result.positions.forEach((pt, i) => {
        const { x, y } = faceLandmarkPositions1[i]
        expectPointClose(pt, { x, y }, 1)
      })
    })

    it('computes face landmarks for rectangular input', async () => {
      const { width, height } = imgElRect

      const result = await faceLandmark68Net.detectLandmarks(imgElRect) as FaceLandmarks68
      expect(result.imageWidth).toEqual(width)
      expect(result.imageHeight).toEqual(height)
      expect(result.shift.x).toEqual(0)
      expect(result.shift.y).toEqual(0)
      result.positions.forEach((pt, i) => {
        const { x, y } = faceLandmarkPositionsRect[i]
        expectPointClose(pt, { x, y }, 5)
      })
    })

  })

})

