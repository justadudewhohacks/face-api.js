import { fetchImage, fetchJson } from '../../../src';
import { euclideanDistance } from '../../../src/euclideanDistance';
import { createFaceRecognitionNet } from '../../../src/faceRecognitionNet';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';

describe('faceRecognitionNet, uncompressed', () => {

  let imgEl1: HTMLImageElement
  let imgElRect: HTMLImageElement
  let faceDescriptor1: number[]
  let faceDescriptorRect: number[]

  beforeAll(async () => {
    imgEl1 = await fetchImage('base/test/images/face1.png')
    imgElRect = await fetchImage('base/test/images/face_rectangular.png')
    faceDescriptor1 = await fetchJson<number[]>('base/test/data/faceDescriptor1.json')
    faceDescriptorRect = await fetchJson<number[]>('base/test/data/faceDescriptorRect.json')
  })

  describeWithNets('uncompressed weights', { withFaceRecognitionNet: { quantized: false } }, ({ faceRecognitionNet }) => {

    it('computes face descriptor for squared input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgEl1) as Float32Array
      expect(result.length).toEqual(128)
      expect(euclideanDistance(result, faceDescriptor1)).toBeLessThan(0.1)
    })

    it('computes face descriptor for rectangular input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgElRect) as Float32Array
      expect(result.length).toEqual(128)
      expect(euclideanDistance(result, faceDescriptorRect)).toBeLessThan(0.1)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        const res = await fetch('base/weights_uncompressed/face_recognition_model.weights')
        const weights = new Float32Array(await res.arrayBuffer())
        const net = createFaceRecognitionNet(weights)
        net.dispose()
      })
    })

  })
})