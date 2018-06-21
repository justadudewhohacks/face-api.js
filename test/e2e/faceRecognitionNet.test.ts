import * as faceapi from '../../src';

describe('faceRecognitionNet', () => {

  let faceRecognitionNet: any, imgEl: HTMLImageElement, faceDescriptor: number[]

  beforeAll(async () => {
    const res = await fetch('base/weights/uncompressed/face_recognition_model.weights')
    const weights = new Float32Array(await res.arrayBuffer())
    faceRecognitionNet = faceapi.faceRecognitionNet(weights)

    const img = await (await fetch('base/test/images/face.png')).blob()
    imgEl = await faceapi.bufferToImage(img)
    faceDescriptor = await (await fetch('base/test/data/faceDescriptor.json')).json()
  })

  it('computes face descriptor', async () => {
    const result = await faceRecognitionNet.computeFaceDescriptor(imgEl) as number[]
    expect(result.length).toEqual(128)
    expect(result).toEqual(new Float32Array(faceDescriptor))
  })
})