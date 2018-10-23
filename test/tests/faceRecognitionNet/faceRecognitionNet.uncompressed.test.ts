import { fetchImage, fetchJson } from '../../../src';
import { euclideanDistance } from '../../../src/euclideanDistance';
import { describeWithNets } from '../../utils';

// TODO: figure out why quantized weights results in NaNs in testcases
// apparently (net weight values differ when loading with karma)
xdescribe('faceRecognitionNet, uncompressed', () => {

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

  })
})