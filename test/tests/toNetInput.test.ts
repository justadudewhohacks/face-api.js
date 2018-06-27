import { NetInput } from '../../src/NetInput';
import { toNetInput } from '../../src/toNetInput';

describe('toNetInput', () => {

  describe('valid args', () => {

    it('from HTMLImageElement', async () => {
      const netInput = await toNetInput(document.createElement('img'))
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(1)
    })

    it('from HTMLVideoElement', async () => {
      const videoEl = document.createElement('video')
      spyOnProperty(videoEl, 'readyState', 'get').and.returnValue(4)

      const netInput = await toNetInput(videoEl)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(1)
    })

    it('from HTMLCanvasElement', async () => {
      const netInput = await toNetInput(document.createElement('canvas'))
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(1)
    })

    it('from HTMLImageElement array', async () => {
      const netInput = await toNetInput([
        document.createElement('img'),
        document.createElement('img')
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(2)
    })

    it('from HTMLVideoElement array', async () => {
      const videoElements = [
        document.createElement('video'),
        document.createElement('video')
      ]
      videoElements.forEach(videoEl =>
        spyOnProperty(videoEl, 'readyState', 'get').and.returnValue(4)
      )

      const netInput = await toNetInput(videoElements)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(2)
    })

    it('from HTMLCanvasElement array', async () => {
      const netInput = await toNetInput([
        document.createElement('canvas'),
        document.createElement('canvas')
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(2)
    })

    it('from mixed media array', async () => {
      const videoEl = document.createElement('video')
      spyOnProperty(videoEl, 'readyState', 'get').and.returnValue(4)

      const netInput = await toNetInput([
        document.createElement('img'),
        document.createElement('canvas'),
        videoEl
      ])
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.canvases.length).toEqual(3)
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
      expect(errorMessage).toBe('toNetInput - expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id')
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
        await toNetInput([document.createElement('img'), undefined] as any)
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - at input index 1: expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id')
    })

  })

})
