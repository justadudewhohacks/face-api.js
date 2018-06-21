import * as faceapi from '../../src';
import { FaceLandmarks } from '../../src/faceLandmarkNet/FaceLandmarks';
import { Point } from '../../src/Point';

describe('faceLandmarkNet', () => {

  let faceLandmarkNet: faceapi.FaceLandmarkNet, imgEl: HTMLImageElement, faceLandmarkPositions: Point[]

  beforeAll(async () => {
    const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
    const weights = new Float32Array(await res.arrayBuffer())
    faceLandmarkNet = faceapi.faceLandmarkNet(weights)

    const img = await (await fetch('base/test/images/face.png')).blob()
    imgEl = await faceapi.bufferToImage(img)
    faceLandmarkPositions = await (await fetch('base/test/data/faceLandmarkPositions.json')).json()
  })

  it('computes face descriptor', async () => {
    const { width, height } = imgEl

    const result = await faceLandmarkNet.detectLandmarks(imgEl) as FaceLandmarks
    expect(result.getImageWidth()).toEqual(width)
    expect(result.getImageHeight()).toEqual(height)
    expect(result.getShift().x).toEqual(0)
    expect(result.getShift().y).toEqual(0)
    expect(result.getPositions().map(({ x, y }) => ({ x, y }))).toEqual(faceLandmarkPositions)
  })
})

