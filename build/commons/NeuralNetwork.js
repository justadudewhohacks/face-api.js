"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork() {
        this._params = undefined;
        this._paramMappings = [];
    }
    Object.defineProperty(NeuralNetwork.prototype, "params", {
        get: function () {
            return this._params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
        get: function () {
            return this._paramMappings;
        },
        enumerable: true,
        configurable: true
    });
    NeuralNetwork.prototype.getParamFromPath = function (paramPath) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        return obj[objProp];
    };
    NeuralNetwork.prototype.reassignParamFromPath = function (paramPath, tensor) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        obj[objProp].dispose();
        obj[objProp] = tensor;
    };
    NeuralNetwork.prototype.getParamList = function () {
        var _this = this;
        return this._paramMappings.map(function (_a) {
            var paramPath = _a.paramPath;
            return ({
                path: paramPath,
                tensor: _this.getParamFromPath(paramPath)
            });
        });
    };
    NeuralNetwork.prototype.getTrainableParams = function () {
        return this.getParamList().filter(function (param) { return param.tensor instanceof tf.Variable; });
    };
    NeuralNetwork.prototype.getFrozenParams = function () {
        return this.getParamList().filter(function (param) { return !(param.tensor instanceof tf.Variable); });
    };
    NeuralNetwork.prototype.variable = function () {
        var _this = this;
        this.getFrozenParams().forEach(function (_a) {
            var path = _a.path, tensor = _a.tensor;
            _this.reassignParamFromPath(path, tf.variable(tensor));
        });
    };
    NeuralNetwork.prototype.freeze = function () {
        var _this = this;
        this.getTrainableParams().forEach(function (_a) {
            var path = _a.path, tensor = _a.tensor;
            _this.reassignParamFromPath(path, tf.tensor(tensor));
        });
    };
    NeuralNetwork.prototype.dispose = function () {
        this.getParamList().forEach(function (param) { return param.tensor.dispose(); });
        this._params = undefined;
    };
    NeuralNetwork.prototype.traversePropertyPath = function (paramPath) {
        if (!this.params) {
            throw new Error("traversePropertyPath - model has no loaded params");
        }
        var result = paramPath.split('/').reduce(function (res, objProp) {
            if (!res.nextObj.hasOwnProperty(objProp)) {
                throw new Error("traversePropertyPath - object does not have property " + objProp + ", for path " + paramPath);
            }
            return { obj: res.nextObj, objProp: objProp, nextObj: res.nextObj[objProp] };
        }, { nextObj: this.params });
        var obj = result.obj, objProp = result.objProp;
        if (!obj || !objProp || !(obj[objProp] instanceof tf.Tensor)) {
            throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
        }
        return { obj: obj, objProp: objProp };
    };
    return NeuralNetwork;
}());
exports.NeuralNetwork = NeuralNetwork;
//# sourceMappingURL=NeuralNetwork.js.map