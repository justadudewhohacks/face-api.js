"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Rect.prototype.toSquare = function () {
        var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var diff = Math.abs(width - height);
        if (width < height) {
            x -= (diff / 2);
            width += diff;
        }
        if (height < width) {
            y -= (diff / 2);
            height += diff;
        }
        return new Rect(x, y, width, height);
    };
    Rect.prototype.pad = function (padX, padY) {
        var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        return new Rect(x - (padX / 2), y - (padY / 2), width + padX, height + padY);
    };
    Rect.prototype.floor = function () {
        return new Rect(Math.floor(this.x), Math.floor(this.y), Math.floor(this.width), Math.floor(this.height));
    };
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=Rect.js.map