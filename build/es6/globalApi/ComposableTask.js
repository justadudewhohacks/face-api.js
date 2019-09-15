import { __awaiter, __generator } from "tslib";
var ComposableTask = /** @class */ (function () {
    function ComposableTask() {
    }
    ComposableTask.prototype.then = function (onfulfilled) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('ComposableTask - run is not implemented');
            });
        });
    };
    return ComposableTask;
}());
export { ComposableTask };
//# sourceMappingURL=ComposableTask.js.map