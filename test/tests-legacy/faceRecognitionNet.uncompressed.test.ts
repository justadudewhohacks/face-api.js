import { createCanvasFromMedia, euclideanDistance } from '../../src';
import { getTestEnv } from '../env';
import { describeWithBackend, describeWithNets } from '../utils';

describeWithBackend('faceRecognitionNet, uncompressed', () => {

  let imgEl1: HTMLCanvasElement
  let imgElRect: HTMLCanvasElement
  let faceDescriptor1: number[]
  let faceDescriptorRect: number[]

  beforeAll(async () => {
    imgEl1 = createCanvasFromMedia(await getTestEnv().loadImage('test/images/face1.png'))
    imgElRect = createCanvasFromMedia(await getTestEnv().loadImage('test/images/face_rectangular.png'))
    faceDescriptor1 = await getTestEnv().loadJson<number[]>('test/data/faceDescriptor1.json')
    faceDescriptorRect = await getTestEnv().loadJson<number[]>('test/data/faceDescriptorRect.json')
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