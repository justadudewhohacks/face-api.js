"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ComposableTask = /** @class */ (function () {
    function ComposableTask() {
    }
    ComposableTask.prototype.then = function (onfulfilled) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = onfulfilled;
                        return [4 /*yield*/, this.run()];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    ComposableTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error('ComposableTask - run is not implemented');
            });
        });
    };
    return ComposableTask;
}());
exports.ComposableTask = ComposableTask;
//# sourceMappingURL=ComposableTask.js.map