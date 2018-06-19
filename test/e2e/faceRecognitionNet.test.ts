import axios from 'axios';

import * as faceapi from '../../src';

describe('faceRecognitionNet', () => {

  let faceRecognitionNet: any, imgEl: HTMLImageElement, faceDescriptor: number[]

  beforeAll(async () => {
    const res = await axios.get('base/weights/face_recognition_model.weights', { responseType: 'arraybuffer' })
    const weights = new Float32Array(res.data)
    faceRecognitionNet = faceapi.faceRecognitionNet(weights)

    const img = await axios.get('base/test/images/face.png', { responseType: 'blob' })
    imgEl = await faceapi.bufferToImage(img.data)
    faceDescriptor = (await axios.get('base/test/data/faceDescriptor.json')).data
  })

  it('computes face descriptor', async () => {
    const result = await faceRecognitionNet.computeFaceDescriptor(imgEl) as number[]
    expect(result.length).toEqual(128)
    expect(result).toEqual(new Float32Array(faceDescriptor))
  })
})