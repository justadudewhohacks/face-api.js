import * as tf from '@tensorflow/tfjs-core';

import { ParamMapping } from './types';

export class NeuralNetwork<TNetParams> {

  protected _params: TNetParams | undefined = undefined
  protected _paramMappings: ParamMapping[] = []

  public get params(): TNetParams | undefined {
    return this._params
  }

  public get paramMappings(): ParamMapping[] {
    return this._paramMappings
  }

  public getParamFromPath(paramPath: string): tf.Tensor {
    const { obj, objProp } = this.traversePropertyPath(paramPath)
    return obj[objProp]
  }

  public reassignParamFromPath(paramPath: string, tensor: tf.Tensor) {
    const { obj, objProp } = this.traversePropertyPath(paramPath)
    obj[objProp].dispose()
    obj[objProp] = tensor
  }

  public getParamList() {
    return this._paramMappings.map(({ paramPath }) => ({
      path: paramPath,
      tensor: this.getParamFromPath(paramPath)
    }))
  }

  public getTrainableParams() {
    return this.getParamList().filter(param => param.tensor instanceof tf.Variable)
  }

  public getFrozenParams() {
    return this.getParamList().filter(param => !(param.tensor instanceof tf.Variable))
  }

  public variable() {
    this.getFrozenParams().forEach(({ path, tensor }) => {
      this.reassignParamFromPath(path, tf.variable(tensor))
    })
  }

  public freeze() {
    this.getTrainableParams().forEach(({ path, tensor }) => {
      this.reassignParamFromPath(path, tf.tensor(tensor as any))
    })
  }

  public dispose() {
    this.getParamList().forEach(param => param.tensor.dispose())
    this._params = undefined
  }

  private traversePropertyPath(paramPath: string) {
    if (!this.params) {
      throw new Error(`traversePropertyPath - model has no loaded params`)
    }

    const result = paramPath.split('/').reduce((res: { nextObj: any, obj?: any, objProp?: string }, objProp) => {
      if (!res.nextObj.hasOwnProperty(objProp)) {
        throw new Error(`traversePropertyPath - object does not have property ${objProp}, for path ${paramPath}`)
      }

      return { obj: res.nextObj, objProp, nextObj: res.nextObj[objProp] }
    }, { nextObj: this.params })

    const { obj, objProp } = result
    if (!obj || !objProp || !(obj[objProp] instanceof tf.Tensor)) {
      throw new Error(`traversePropertyPath - parameter is not a tensor, for path ${paramPath}`)
    }

    return { obj, objProp }
  }
}