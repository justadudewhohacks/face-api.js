import * as tf from '@tensorflow/tfjs-core';

import { NetInput } from '../../src/NetInput';
import { bufferToImage, createCanvasFromMedia } from '../../src/utils';
import { expectAllTensorsReleased, tensor3D } from '../utils';


describe('NetInput', () => {

  let imgEl: HTMLImageElement, canvasEl: HTMLCanvasElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/face1.png')).blob()
    imgEl = await bufferToImage(img)
    canvasEl = createCanvasFromMedia(imgEl)
  })

  describe('no memory leaks', () => {

    describe('constructor', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(() => {
          const net = new NetInput([imgEl])
          net.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(() => {
          const net = new NetInput([imgEl, imgEl, imgEl])
          net.dispose()
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tensor3D()

        await expectAllTensorsReleased(() => {
          const net = new NetInput([tensor])
          net.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [tensor3D(), tensor3D(), tensor3D()]

        await expectAllTensorsReleased(() => {
          const net = new NetInput(tensors)
          net.dispose()
        })

        tensors.forEach(t => t.dispose())
      })
    })

    describe('toBatchTensor', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(() => {
          const net = new NetInput([imgEl])
          const batchTensor = net.toBatchTensor(100, false)
          net.dispose()
          batchTensor.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(() => {
          const net = new NetInput([imgEl, imgEl, imgEl])
          const batchTensor = net.toBatchTensor(100, false)
          net.dispose()
          batchTensor.dispose()
        })
      })

      it('managed, single image element', async () => {
        await expectAllTensorsReleased(() => {
          const net = (new NetInput([imgEl])).managed()
          const batchTensor = net.toBatchTensor(100, false)
          batchTensor.dispose()
        })
      })

      it('managed, multiple image elements', async () => {
        await expectAllTensorsReleased(() => {
          const net = (new NetInput([imgEl, imgEl, imgEl])).managed()
          const batchTensor = net.toBatchTensor(100, false)
          batchTensor.dispose()
        })
      })

    })

  })

})
