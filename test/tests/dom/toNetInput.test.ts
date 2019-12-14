import * as tf from '@tensorflow/tfjs-core';

import { createCanvasFromMedia, env, NetInput, toNetInput } from '../../../src';
import { getTestEnv } from '../../env';
import { expectAllTensorsReleased } from '../../utils';


describe('toNetInput', () => {

  let imgEl: HTMLImageElement, canvasEl: HTMLCanvasElement

  beforeAll(async () => {
    imgEl = await getTestEnv().loadImage('test/images/white.png')
    canvasEl = createCanvasFromMedia(imgEl)
  })

  describe('valid args', () => {

    it('from HTMLImageElement', async () => {
      const netInput = await toNetInput(imgEl)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(1)
    })

    it('from HTMLCanvasElement', async () => {
      const netInput = await toNetInput(canvasEl)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(1)
    })

    it('from HTMLImageElement array', async () => {
      const netInput = await toNetInput([
        imgEl,
        imgEl
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(2)
    })

    it('from HTMLCanvasElement array', async () => {
      const netInput = await toNetInput([
        canvasEl,
        canvasEl
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(2)
    })

    it('from mixed media array', async () => {
      const netInput = await toNetInput([
        imgEl,
        canvasEl,
        canvasEl
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(3)
    })

  })

  describe('invalid args', () => {
    it('undefined', async () => {
      let errorMessage
      try {
        await toNetInput(undefined as any)
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id')
    })

    it('empty array', async () => {
      let errorMessage
      try {
        await toNetInput([])
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - empty array passed as input')
    })

    it('undefined at input index 1', async () => {
      let errorMessage
      try {
        await toNetInput([env.getEnv().createImageElement(), undefined] as any)
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - at input index 1: expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id')
    })

  })

  describe('no memory leaks', () => {

    it('constructor', async () => {
      const tensors = [imgEl, imgEl, imgEl].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))
      const tensor4ds = tensors.map(t => t.expandDims<tf.Rank.R4>())

      await expectAllTensorsReleased(async () => {
        await toNetInput(imgEl)
        await toNetInput([imgEl, imgEl, imgEl])
        await toNetInput(tensors[0])
        await toNetInput(tensors)
        await toNetInput(tensor4ds[0])
        await toNetInput(tensor4ds)
      })

      tensors.forEach(t => t.dispose())
      tensor4ds.forEach(t => t.dispose())
    })

  })

})
