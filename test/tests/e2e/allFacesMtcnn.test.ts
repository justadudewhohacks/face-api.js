import * as faceapi from '../../../src';
import { FaceLandmarks5 } from '../../../src/mtcnn/FaceLandmarks5';
import { NetInput } from '../../../src/NetInput';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';
import { expectMtcnnResults } from './expectedResults';

describe('allFacesMtcnn', () => {

  let imgEl: HTMLImageElement
  let facesFaceDescriptors: number[][]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await faceapi.bufferToImage(img)
    facesFaceDescriptors = await (await fetch('base/test/data/facesFaceDescriptorsMtcnn.json')).json()
  })

  describeWithNets('computes full face descriptions', { withAllFacesMtcnn: true }, ({ allFacesMtcnn }) => {

    it('minFaceSize = 20', async () => {
      const forwardParams = {
        minFaceSize: 20
      }

      const results = await allFacesMtcnn(imgEl, forwardParams)
      expect(results.length).toEqual(6)

      const mtcnnResult = results.map(res => ({
        faceDetection: res.detection,
        faceLandmarks: res.landmarks as FaceLandmarks5
      }))
      expectMtcnnResults(mtcnnResult, [0, 1, 2, 3, 4, 5], 1, 1)
      results.forEach(({ descriptor }, i) => {
        expect(descriptor).toEqual(new Float32Array(facesFaceDescriptors[i]))
      })
    })

  })

  describeWithNets('no memory leaks', { withAllFacesMtcnn: true }, ({ allFacesMtcnn }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesMtcnn(imgEl)
      })
    })

  })


})