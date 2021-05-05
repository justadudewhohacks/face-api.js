import { fetchJson } from '../../../src';

describe('fetchJson', () => {

  it('fetches json', async () => {
    const url = 'test/data/boxes.json'
    expect(async () => await fetchJson(url)).not.toThrow()
  })

})
