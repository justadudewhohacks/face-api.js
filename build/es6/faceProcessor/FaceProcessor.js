import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork } from 'tfjs-image-recognition-base';
import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { seperateWeightMaps } from './util';
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
            var bottleneckFeatures = input instanceof NetInput
                ? _this.faceFeatureExtractor.forwardInput(input)
                : input;
            return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
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
        return extractParams(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    };
    FaceProcessor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
        this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
        return extractParamsFromWeigthMap(classifierMap);
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
}(NeuralNetwork));
export { FaceProcessor };
//# sourceMappingURL=FaceProcessor.js.map