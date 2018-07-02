"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var isTensor_1 = require("./commons/isTensor");
var padToSquare_1 = require("./padToSquare");
var Point_1 = require("./Point");
var utils_1 = require("./utils");
var NetInput = /** @class */ (function () {
    function NetInput(inputs) {
        this._inputs = [];
        this._isManaged = false;
        this._inputDimensions = [];
        this._paddings = [];
        if (isTensor_1.isTensor4D(inputs)) {
            this._inputs = tf.unstack(inputs);
        }
        if (Array.isArray(inputs)) {
            this._inputs = inputs.map(function (input) {
                if (isTensor_1.isTensor3D(input)) {
                    // TODO: make sure not to dispose original tensors passed in by the user
                    return tf.clone(input);
                }
                return tf.fromPixels(input instanceof HTMLCanvasElement ? input : utils_1.createCanvasFromMedia(input));
            });
        }
        this._inputDimensions = this._inputs.map(function (t) { return t.shape; });
    }
    Object.defineProperty(NetInput.prototype, "inputs", {
        get: function () {
            return this._inputs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "isManaged", {
        get: function () {
            return this._isManaged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "batchSize", {
        get: function () {
            return this._inputs.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "inputDimensions", {
        get: function () {
            return this._inputDimensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "paddings", {
        get: function () {
            return this._paddings;
        },
        enumerable: true,
        configurable: true
    });
    NetInput.prototype.getInputDimensions = function (batchIdx) {
        return this._inputDimensions[batchIdx];
    };
    NetInput.prototype.getInputHeight = function (batchIdx) {
        return this._inputDimensions[batchIdx][0];
    };
    NetInput.prototype.getInputWidth = function (batchIdx) {
        return this._inputDimensions[batchIdx][1];
    };
    NetInput.prototype.getPaddings = function (batchIdx) {
        return this._paddings[batchIdx];
    };
    NetInput.prototype.toBatchTensor = function (inputSize, isCenterInputs) {
        var _this = this;
        if (isCenterInputs === void 0) { isCenterInputs = true; }
        return tf.tidy(function () {
            var inputTensors = _this._inputs.map(function (inputTensor) {
                var _a = inputTensor.shape, originalHeight = _a[0], originalWidth = _a[1];
                var imgTensor = inputTensor.expandDims().toFloat();
                imgTensor = padToSquare_1.padToSquare(imgTensor, isCenterInputs);
                var _b = imgTensor.shape.slice(1), heightAfterPadding = _b[0], widthAfterPadding = _b[1];
                if (heightAfterPadding !== inputSize || widthAfterPadding !== inputSize) {
                    imgTensor = tf.image.resizeBilinear(imgTensor, [inputSize, inputSize]);
                }
                _this._paddings.push(new Point_1.Point(widthAfterPadding - originalWidth, heightAfterPadding - originalHeight));
                return imgTensor;
            });
            var batchTensor = tf.stack(inputTensors).as4D(_this.batchSize, inputSize, inputSize, 3);
            if (_this.isManaged) {
                _this.dispose();
            }
            return batchTensor;
        });
    };
    /**
     *  By setting the isManaged flag, all newly created tensors will be automatically
     *  automatically disposed after the batch tensor has been created
     */
    NetInput.prototype.managed = function () {
        this._isManaged = true;
        return this;
    };
    NetInput.prototype.dispose = function () {
        this._inputs.forEach(function (t) { return t.dispose(); });
    };
    return NetInput;
}());
exports.NetInput = NetInput;
//# sourceMappingURL=NetInput.js.map