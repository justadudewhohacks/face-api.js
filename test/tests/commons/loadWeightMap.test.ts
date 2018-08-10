import { getModelUris } from '../../../src/commons/loadWeightMap';

const FAKE_DEFAULT_MODEL_NAME = 'fake_model_name'

describe('loadWeightMap', () => {

  describe('getModelUris', () => {

    it('returns uris from relative url if no argument passed', () => {
      const result = getModelUris(undefined, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(`${FAKE_DEFAULT_MODEL_NAME}-weights_manifest.json`)
      expect(result.modelBaseUri).toEqual('')
    })

    it('returns uris from relative url for empty string', () => {
      const result = getModelUris('', FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(`${FAKE_DEFAULT_MODEL_NAME}-weights_manifest.json`)
      expect(result.modelBaseUri).toEqual('')
    })

    it('returns uris for top level url, leading slash preserved', () => {
      const result = getModelUris('/', FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(`/${FAKE_DEFAULT_MODEL_NAME}-weights_manifest.json`)
      expect(result.modelBaseUri).toEqual('/')
    })

    it('returns uris, given url path', () => {
      const uri = 'path/to/modelfiles'
      const result = getModelUris(uri, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(`${uri}/${FAKE_DEFAULT_MODEL_NAME}-weights_manifest.json`)
      expect(result.modelBaseUri).toEqual(uri)
    })

    it('returns uris, given url path, leading slash preserved', () => {
      const uri = '/path/to/modelfiles'
      const result = getModelUris(`/${uri}`, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(`${uri}/${FAKE_DEFAULT_MODEL_NAME}-weights_manifest.json`)
      expect(result.modelBaseUri).toEqual(uri)
    })

    it('returns uris, given manifest uri', () => {
      const uri = 'path/to/modelfiles/model-weights_manifest.json'
      const result = getModelUris(uri, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(uri)
      expect(result.modelBaseUri).toEqual('path/to/modelfiles')
    })

    it('returns uris, given manifest uri, leading slash preserved', () => {
      const uri = '/path/to/modelfiles/model-weights_manifest.json'
      const result = getModelUris(uri, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(uri)
      expect(result.modelBaseUri).toEqual('/path/to/modelfiles')
    })

    it('returns correct uris, given external path', () => {
      const uri = 'https://example.com/path/to/modelfiles/';
      const result = getModelUris(uri, FAKE_DEFAULT_MODEL_NAME)

      expect(result.manifestUri).toEqual(uri + 'model-weights_manifest.json')
      expect(result.modelBaseUri).toEqual(uri)
    })

  })

})
