"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var fullyConnectedLayer_1 = require("../common/fullyConnectedLayer");
var extractParams_1 = require("./extractParams");
var extractParamsFromWeigthMap_1 = require("./extractParamsFromWeigthMap");
var util_1 = require("./util");
var FaceProcessor = /** @class */ (function (_super) {
    tslib_1.__extends(FaceProcessor, _super);
    function FaceProcessor(_name, faceFeatureExtractor) {
        var _this = _super.call(this, _name) || this;
        _this._faceFeatureExtractor = faceFeatureExtractor;
        return _this;
    }
    Object.defineProperty(FaceProcessor.prototype, "faceFeatureExtractor", {
        get: function () {
            return this._faceFeatureExtractor;
        },
        enumerable: true,
        configurable: true
    });
    FaceProcessor.prototype.runNet = function (input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error(this._name + " - load model before inference");
        }
        return tf.tidy(function () {
            var bottleneckFeatures = input instanceof tfjs_image_recognition_base_1.NetInput
                ? _this.faceFeatureExtractor.forwardInput(input)
                : input;
            return fullyConnectedLayer_1.fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
        });
    };
    FaceProcessor.prototype.dispose = function (throwOnRedispose) {
        if (throwOnRedispose === void 0) { throwOnRedispose = true; }
        this.faceFeatureExtractor.dispose(throwOnRedispose);
        _super.prototype.dispose.call(this, throwOnRedispose);
    };
    FaceProcessor.prototype.loadClassifierParams = function (weights) {
        var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
        this._params = params;
        this._paramMappings = paramMappings;
    };
    FaceProcessor.prototype.extractClassifierParams = function (weights) {
        return extractParams_1.extractParams(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    };
    FaceProcessor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        var _a = util_1.seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
        this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
        return extractParamsFromWeigthMap_1.extractParamsFromWeigthMap(classifierMap);
    };
    FaceProcessor.prototype.extractParams = function (weights) {
        var cIn = this.getClassifierChannelsIn();
        var cOut = this.getClassifierChannelsOut();
        var classifierWeightSize = (cOut * cIn) + cOut;
        var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
        var classifierWeights = weights.slice(weights.length - classifierWeightSize);
        this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
        return this.extractClassifierParams(classifierWeights);
    };
    return FaceProcessor;
}(tfjs_image_recognition_base_1.NeuralNetwork));
exports.FaceProcessor = FaceProcessor;
//# sourceMappingURL=FaceProcessor.js.map