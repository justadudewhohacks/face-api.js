import * as tf from '@tensorflow/tfjs-core';

import { FaceLandmark68NetBase } from '../../../src/faceLandmarkNet/FaceLandmark68NetBase';

class FakeFaceLandmark68NetBase extends FaceLandmark68NetBase<any> {
  public runNet(_: any): any {
  }

  protected getDefaultModelName(): any {
    throw new Error('FakeNeuralNetwork - getDefaultModelName not implemented')
  }

  protected extractParams(_: any): any {
    throw new Error('FakeNeuralNetwork - extractParams not implemented')
  }

  protected extractParamsFromWeigthMap(_: any): any {
    throw new Error('FakeNeuralNetwork - extractParamsFromWeigthMap not implemented')
  }
}

describe('FaceLandmark68NetBase', () => {

  describe('postProcess', () => {

    const net = new FakeFaceLandmark68NetBase('')

    describe('single batch', () => {

      it('transform x coordinates for width < height', () => {

        const landmarksData = Array(136).fill(0)
        landmarksData[0] = 0.4
        landmarksData[1] = 0.55
        landmarksData[2] = 0.2
        landmarksData[3] = 0.55
        landmarksData[4] = 0.1
        landmarksData[5] = 0.55

        const out = net.postProcess(
          tf.tensor2d(landmarksData, [1, 136]),
          128,
          [{ width: 200, height: 300 }]
        ).dataSync()

        expect(out[0]).toBeCloseTo(0.35, 2)
        expect(out[1]).toBeCloseTo(0.55, 2)
        expect(out[2]).toBeCloseTo(0.05, 2)
        expect(out[3]).toBeCloseTo(0.55, 2)
        expect(out[4]).toBeCloseTo(-0.1, 2)
        expect(out[5]).toBeCloseTo(0.55, 2)
      })

      it('transform y coordinates for height < width', () => {

        const landmarksData = Array(136).fill(0)
        landmarksData[0] = 0.55
        landmarksData[1] = 0.4
        landmarksData[2] = 0.55
        landmarksData[3] = 0.2
        landmarksData[4] = 0.55
        landmarksData[5] = 0.1

        const out = net.postProcess(
          tf.tensor2d(landmarksData, [1, 136]),
          128,
          [{ width: 300, height: 200 }]
        ).dataSync()

        expect(out[0]).toBeCloseTo(0.55, 2)
        expect(out[1]).toBeCloseTo(0.35, 2)
        expect(out[2]).toBeCloseTo(0.55, 2)
        expect(out[3]).toBeCloseTo(0.05, 2)
        expect(out[4]).toBeCloseTo(0.55, 2)
        expect(out[5]).toBeCloseTo(-0.1, 2)
      })

      it('no transformation for height === width', () => {

        const landmarksData = Array(136).fill(0)
        landmarksData[0] = 0.55
        landmarksData[1] = 0.4
        landmarksData[2] = 0.55
        landmarksData[3] = 0.2
        landmarksData[4] = 0.55
        landmarksData[5] = 0.1

        const out = net.postProcess(
          tf.tensor2d(landmarksData, [1, 136]),
          128,
          [{ width: 300, height: 300 }]
        ).dataSync()

        expect(out[0]).toBeCloseTo(0.55, 2)
        expect(out[1]).toBeCloseTo(0.4, 2)
        expect(out[2]).toBeCloseTo(0.55, 2)
        expect(out[3]).toBeCloseTo(0.2, 2)
        expect(out[4]).toBeCloseTo(0.55, 2)
        expect(out[5]).toBeCloseTo(0.1, 2)
      })

    })

    describe('multiple batches', () => {

      it('transform coordinates correctly for multiple batches', () => {

        const landmarksData1 = Array(136).fill(0)
        landmarksData1[0] = 0.4
        landmarksData1[1] = 0.55
        landmarksData1[2] = 0.2
        landmarksData1[3] = 0.55
        landmarksData1[4] = 0.1
        landmarksData1[5] = 0.55
        const landmarksData2 = Array(136).fill(0)
        landmarksData2[0] = 0.55
        landmarksData2[1] = 0.4
        landmarksData2[2] = 0.55
        landmarksData2[3] = 0.2
        landmarksData2[4] = 0.55
        landmarksData2[5] = 0.1

        const out = net.postProcess(
          tf.tensor2d(landmarksData1.concat(landmarksData2).concat(landmarksData1), [3, 136]),
          128,
          [{ width: 200, height: 300 }, { width: 300, height: 200 }, { width: 300, height: 300 }]
        ).dataSync()

        expect(out[0]).toBeCloseTo(0.35, 2)
        expect(out[1]).toBeCloseTo(0.55, 2)
        expect(out[2]).toBeCloseTo(0.05, 2)
        expect(out[3]).toBeCloseTo(0.55, 2)
        expect(out[4]).toBeCloseTo(-0.1, 2)
        expect(out[5]).toBeCloseTo(0.55, 2)
        expect(out[0 + 136]).toBeCloseTo(0.55, 2)
        expect(out[1 + 136]).toBeCloseTo(0.35, 2)
        expect(out[2 + 136]).toBeCloseTo(0.55, 2)
        expect(out[3 + 136]).toBeCloseTo(0.05, 2)
        expect(out[4 + 136]).toBeCloseTo(0.55, 2)
        expect(out[5 + 136]).toBeCloseTo(-0.1, 2)
        expect(out[0 + (136 * 2)]).toBeCloseTo(0.4, 2)
        expect(out[1 + (136 * 2)]).toBeCloseTo(0.55, 2)
        expect(out[2 + (136 * 2)]).toBeCloseTo(0.2, 2)
        expect(out[3 + (136 * 2)]).toBeCloseTo(0.55, 2)
        expect(out[4 + (136 * 2)]).toBeCloseTo(0.1, 2)
        expect(out[5 + (136 * 2)]).toBeCloseTo(0.55, 2)
      })

    })

  })

})
