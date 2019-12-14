import { fetchOrThrow } from '../../../src';

describe('fetchOrThrow', () => {

  it('404, throws', async () => {
    const url = '/does/not/exist'

    let err = ''
    try {
      await fetchOrThrow(url)
    } catch (e) {
      err = e.toString()
    }

    expect(err).toContain('failed to fetch: (404)')
    expect(err).toContain(url)
  })

})
