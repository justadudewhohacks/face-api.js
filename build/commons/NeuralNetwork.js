"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork(_name) {
        this._name = _name;
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
    NeuralNetwork.prototype.dispose = function (throwOnRedispose) {
        if (throwOnRedispose === void 0) { throwOnRedispose = true; }
        this.getParamList().forEach(function (param) {
            if (throwOnRedispose && param.tensor.isDisposed) {
                throw new Error("param tensor has already been disposed for path " + param.path);
            }
            param.tensor.dispose();
        });
        this._params = undefined;
    };
    NeuralNetwork.prototype.load = function (weightsOrUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, paramMappings, params;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (weightsOrUrl instanceof Float32Array) {
                            this.extractWeights(weightsOrUrl);
                            return [2 /*return*/];
                        }
                        if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
                            throw new Error(this._name + ".load - expected model uri, or weights as Float32Array");
                        }
                        return [4 /*yield*/, this.loadQuantizedParams(weightsOrUrl)];
                    case 1:
                        _a = _b.sent(), paramMappings = _a.paramMappings, params = _a.params;
                        this._paramMappings = paramMappings;
                        this._params = params;
                        return [2 /*return*/];
                }
            });
        });
    };
    NeuralNetwork.prototype.extractWeights = function (weights) {
        var _a = this.extractParams(weights), paramMappings = _a.paramMappings, params = _a.params;
        this._paramMappings = paramMappings;
        this._params = params;
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
    NeuralNetwork.prototype.loadQuantizedParams = function (_) {
        throw new Error(this._name + ".loadQuantizedParams - not implemented");
    };
    NeuralNetwork.prototype.extractParams = function (_) {
        throw new Error(this._name + ".extractParams - not implemented");
    };
    return NeuralNetwork;
}());
exports.NeuralNetwork = NeuralNetwork;
//# sourceMappingURL=NeuralNetwork.js.map