import { __awaiter, __extends, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, normalize, range, toNetInput, } from 'tfjs-image-recognition-base';
import { depthwiseSeparableConv } from '../common/depthwiseSeparableConv';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
function conv(x, params, stride) {
    return tf.add(tf.conv2d(x, params.filters, stride, 'same'), params.bias);
}
function reductionBlock(x, params, isActivateInput) {
    if (isActivateInput === void 0) { isActivateInput = true; }
    var out = isActivateInput ? tf.relu(x) : x;
    out = depthwiseSeparableConv(out, params.separable_conv0, [1, 1]);
    out = depthwiseSeparableConv(tf.relu(out), params.separable_conv1, [1, 1]);
    out = tf.maxPool(out, [3, 3], [2, 2], 'same');
    out = tf.add(out, conv(x, params.expansion_conv, [2, 2]));
    return out;
}
function mainBlock(x, params) {
    var out = depthwiseSeparableConv(tf.relu(x), params.separable_conv0, [1, 1]);
    out = depthwiseSeparableConv(tf.relu(out), params.separable_conv1, [1, 1]);
    out = depthwiseSeparableConv(tf.relu(out), params.separable_conv2, [1, 1]);
    out = tf.add(out, x);
    return out;
}
var TinyXception = /** @class */ (function (_super) {
    __extends(TinyXception, _super);
    function TinyXception(numMainBlocks) {
        var _this = _super.call(this, 'TinyXception') || this;
        _this._numMainBlocks = numMainBlocks;
        return _this;
    }
    TinyXception.prototype.forwardInput = function (input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error('TinyXception - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(256));
            var out = tf.relu(conv(normalized, params.entry_flow.conv_in, [2, 2]));
            out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
            out = reductionBlock(out, params.entry_flow.reduction_block_1);
            range(_this._numMainBlocks, 0, 1).forEach(function (idx) {
                out = mainBlock(out, params.middle_flow["main_block_" + idx]);
            });
            out = reductionBlock(out, params.exit_flow.reduction_block);
            out = tf.relu(depthwiseSeparableConv(out, params.exit_flow.separable_conv, [1, 1]));
            return out;
        });
    };
    TinyXception.prototype.forward = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    TinyXception.prototype.getDefaultModelName = function () {
        return 'tiny_xception_model';
    };
    TinyXception.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap, this._numMainBlocks);
    };
    TinyXception.prototype.extractParams = function (weights) {
        return extractParams(weights, this._numMainBlocks);
    };
    return TinyXception;
}(NeuralNetwork));
export { TinyXception };
//# sourceMappingURL=TinyXception.js.map