export interface IMtcnnOptions {
  minFaceSize?: number
  scaleFactor?: number
  maxNumScales?: number
  scoreThresholds?: number[]
  scaleSteps?: number[]
}

export class MtcnnOptions {
  protected _name: string = 'MtcnnOptions'

  private _minFaceSize: number
  private _scaleFactor: number
  private _maxNumScales: number
  private _scoreThresholds: number[]
  private _scaleSteps: number[] | undefined

  constructor({ minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps }: IMtcnnOptions = {}) {
    this._minFaceSize = minFaceSize || 20
    this._scaleFactor = scaleFactor || 0.709
    this._maxNumScales = maxNumScales || 10
    this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7]
    this._scaleSteps = scaleSteps

    if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
      throw new Error(`${this._name} - expected minFaceSize to be a number > 0`)
    }

    if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
      throw new Error(`${this._name} - expected scaleFactor to be a number between 0 and 1`)
    }

    if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
      throw new Error(`${this._name} - expected maxNumScales to be a number > 0`)
    }

    if (
      !Array.isArray(this._scoreThresholds)
        || this._scoreThresholds.length !== 3
        || this._scoreThresholds.some(th => typeof th !== 'number')
    ) {
      throw new Error(`${this._name} - expected scoreThresholds to be an array of numbers of length 3`)
    }

    if (
      !Array.isArray(this._scaleSteps)
        || this._scaleSteps.some(th => typeof th !== 'number')
    ) {
      throw new Error(`${this._name} - expected scaleSteps to be an array of numbers`)
    }
  }

  get minFaceSize(): number { return this._minFaceSize }
  get scaleFactor(): number { return this._scaleFactor }
  get maxNumScales(): number { return this._maxNumScales }
  get scoreThresholds(): number[] { return this._scoreThresholds }
  get scaleSteps(): number[] | undefined { return this._scaleSteps }
}