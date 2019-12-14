import { fetchNetWeights } from '../../../src';

describe('fetchNetWeights', () => {

  it('fetches .weights file', async () => {
    const url = 'test/data/dummy.weights'
    const weights = await fetchNetWeights(url)
    expect(weights instanceof Float32Array).toBe(true)
  })

})
