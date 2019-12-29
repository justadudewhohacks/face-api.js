import { _NeuralNetwork } from '../src/_NeuralNetwork';

export type TestEnv = {
  loadImage: (uri: string) => Promise<HTMLImageElement>
  loadJson: <T> (uri: string) => Promise<T>
  initNet: <TNet extends _NeuralNetwork<any>>(
    net: TNet,
    uncompressedFilename?: string | boolean,
    isUnusedModel?: boolean
  ) => any
}