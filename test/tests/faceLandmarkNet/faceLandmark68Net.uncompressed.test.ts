import { fetchImage, fetchJson, Point } from '../../../src';
import { FaceLandmarks68 } from '../../../src/classes/FaceLandmarks68';
import { createFaceLandmarkNet } from '../../../src/faceLandmarkNet';
import { describeWithNets, expectAllTensorsReleased, expectPointClose } from '../../utils';

describe('faceLandmark68Net, uncompressed', () => {

  let imgEl1: HTMLImageElement
  let imgElRect: HTMLImageElement
  let faceLandmarkPositions1: Point[]
  let faceLandmarkPositionsRect: Point[]

  beforeAll(async () => {
    imgEl1 = await fetchImage('base/test/images/face1.png')
    imgElRect = await fetchImage('base/test/images/face_rectangular.png')
    faceLandmarkPositions1 = await fetchJson<Point[]>('base/test/data/faceLandmarkPositions1.json')
    faceLandmarkPositionsRect = await fetchJson<Point[]>('base/test/data/faceLandmarkPositionsRect.json')
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
        expectPointClose(pt, { x, y }, 2)
      })
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const res = await fetch('base/weights_uncompressed/face_landmark_68_model.weights')
        const weights = new Float32Array(await res.arrayBuffer())
        const net = createFaceLandmarkNet(weights)
        net.dispose()
      })
    })

  })

})

