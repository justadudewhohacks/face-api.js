import { fetchImage } from '../../../src';

describe('fetchImage', () => {

  it('invalid mime type', async () => {
    const url = 'base/test/data/boxes.json'

    let err = ''
    try {
      await fetchImage(url)
    } catch (e) {
      err = e.toString()
    }

    expect(err).toContain('fetchImage - expected blob type to be of type image/*, instead have: application/json')
    expect(err).toContain(url)
  })

  it('fetches image', async () => {
    const url = 'base/test/images/white.png'
    const img = await fetchImage(url)
    expect(img instanceof HTMLImageElement).toBe(true)
  })

})
