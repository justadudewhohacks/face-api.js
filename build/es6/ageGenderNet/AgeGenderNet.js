import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, toNetInput } from 'tfjs-image-recognition-base';
import { fullyConnectedLayer } from '../common/fullyConnectedLayer';
import { seperateWeightMaps } from '../faceProcessor/util';
import { TinyXception } from '../xception/TinyXception';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { Gender } from './types';
var AgeGenderNet = /** @class */ (function (_super) {
    tslib_1.__extends(AgeGenderNet, _super);
    function AgeGenderNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyXception(2); }
        var _this = _super.call(this, 'AgeGenderNet') || this;
        _this._faceFeatureExtractor = faceFeatureExtractor;
        return _this;
    }
    Object.defineProperty(AgeGenderNet.prototype, "faceFeatureExtractor", {
        get: function () {
            return this._faceFeatureExtractor;
        },
        enumerable: true,
        configurable: true
    });
    AgeGenderNet.prototype.runNet = function (input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error(this._name + " - load model before inference");
        }
        return tf.tidy(function () {
            var bottleneckFeatures = input instanceof NetInput
                ? _this.faceFeatureExtractor.forwardInput(input)
                : input;
            var pooled = tf.avgPool(bottleneckFeatures, [7, 7], [2, 2], 'valid').as2D(bottleneckFeatures.shape[0], -1);
            var age = fullyConnectedLayer(pooled, params.fc.age).as1D();
            var gender = fullyConnectedLayer(pooled, params.fc.gender);
            return { age: age, gender: gender };
        });
    };
    AgeGenderNet.prototype.forwardInput = function (input) {
        var _this = this;
        return tf.tidy(function () {
            var _a = _this.runNet(input), age = _a.age, gender = _a.gender;
            return { age: age, gender: tf.softmax(gender) };
        });
    };
    AgeGenderNet.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    AgeGenderNet.prototype.predictAgeAndGender = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, out, ages, genders, ageAndGenderTensors, predictionsByBatch;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _a.sent();
                        return [4 /*yield*/, this.forwardInput(netInput)];
                    case 2:
                        out = _a.sent();
                        ages = tf.unstack(out.age);
                        genders = tf.unstack(out.gender);
                        ageAndGenderTensors = ages.map(function (ageTensor, i) { return ({
                            ageTensor: ageTensor,
                            genderTensor: genders[i]
                        }); });
                        return [4 /*yield*/, Promise.all(ageAndGenderTensors.map(function (_a) {
                                var ageTensor = _a.ageTensor, genderTensor = _a.genderTensor;
                                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var age, probMale, isMale, gender, genderProbability;
                                    return tslib_1.__generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0: return [4 /*yield*/, ageTensor.data()];
                                            case 1:
                                                age = (_b.sent())[0];
                                                return [4 /*yield*/, genderTensor.data()];
                                            case 2:
                                                probMale = (_b.sent())[0];
                                                isMale = probMale > 0.5;
                                                gender = isMale ? Gender.MALE : Gender.FEMALE;
                                                genderProbability = isMale ? probMale : (1 - probMale);
                                                ageTensor.dispose();
                                                genderTensor.dispose();
                                                return [2 /*return*/, { age: age, gender: gender, genderProbability: genderProbability }];
                                        }
                                    });
                                });
                            }))];
                    case 3:
                        predictionsByBatch = _a.sent();
                        out.age.dispose();
                        out.gender.dispose();
                        return [2 /*return*/, netInput.isBatchInput
                                ? predictionsByBatch
                                : predictionsByBatch[0]];
                }
            });
        });
    };
    AgeGenderNet.prototype.getDefaultModelName = function () {
        return 'age_gender_model';
    };
    AgeGenderNet.prototype.dispose = function (throwOnRedispose) {
        if (throwOnRedispose === void 0) { throwOnRedispose = true; }
        this.faceFeatureExtractor.dispose(throwOnRedispose);
        _super.prototype.dispose.call(this, throwOnRedispose);
    };
    AgeGenderNet.prototype.loadClassifierParams = function (weights) {
        var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
        this._params = params;
        this._paramMappings = paramMappings;
    };
    AgeGenderNet.prototype.extractClassifierParams = function (weights) {
        return extractParams(weights);
    };
    AgeGenderNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
        var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
        this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
        return extractParamsFromWeigthMap(classifierMap);
    };
    AgeGenderNet.prototype.extractParams = function (weights) {
        var classifierWeightSize = (512 * 1 + 1) + (512 * 2 + 2);
        var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
        var classifierWeights = weights.slice(weights.length - classifierWeightSize);
        this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
        return this.extractClassifierParams(classifierWeights);
    };
    return AgeGenderNet;
}(NeuralNetwork));
export { AgeGenderNet };
//# sourceMappingURL=AgeGenderNet.js.map