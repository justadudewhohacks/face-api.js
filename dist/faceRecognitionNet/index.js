import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { getImageTensor, padToSquare } from '../transformInputs';
import { convDown } from './convLayer';
import { extractParams } from './extractParams';
import { normalize } from './normalize';
import { residual, residualDown } from './residualLayer';
export function faceRecognitionNet(weights) {
    var _this = this;
    var params = extractParams(weights);
    function forward(input) {
        return tf.tidy(function () {
            var x = normalize(padToSquare(getImageTensor(input)));
            var out = convDown(x, params.conv32_down);
            out = tf.maxPool(out, 3, 2, 'valid');
            out = residual(out, params.conv32_1);
            out = residual(out, params.conv32_2);
            out = residual(out, params.conv32_3);
            out = residualDown(out, params.conv64_down);
            out = residual(out, params.conv64_1);
            out = residual(out, params.conv64_2);
            out = residual(out, params.conv64_3);
            out = residualDown(out, params.conv128_down);
            out = residual(out, params.conv128_1);
            out = residual(out, params.conv128_2);
            out = residualDown(out, params.conv256_down);
            out = residual(out, params.conv256_1);
            out = residual(out, params.conv256_2);
            out = residualDown(out, params.conv256_down_out);
            var globalAvg = out.mean([1, 2]);
            var fullyConnected = tf.matMul(globalAvg, params.fc);
            return fullyConnected;
        });
    }
    var computeFaceDescriptor = function (input) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var result, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = forward(input);
                    return [4 /*yield*/, result.data()];
                case 1:
                    data = _a.sent();
                    result.dispose();
                    return [2 /*return*/, data];
            }
        });
    }); };
    var computeFaceDescriptorSync = function (input) {
        var result = forward(input);
        var data = result.dataSync();
        result.dispose();
        return data;
    };
    return {
        computeFaceDescriptor: computeFaceDescriptor,
        computeFaceDescriptorSync: computeFaceDescriptorSync,
        forward: forward
    };
}
//# sourceMappingURL=index.js.map