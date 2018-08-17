"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoundingBox_1 = require("./BoundingBox");
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
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
    Rect.prototype.toBoundingBox = function () {
        return new BoundingBox_1.BoundingBox(this.x, this.y, this.x + this.width, this.y + this.height);
    };
    Rect.prototype.clipAtImageBorders = function (imgWidth, imgHeight) {
        var _a = this, x = _a.x, y = _a.y, right = _a.right, bottom = _a.bottom;
        var clippedX = Math.max(x, 0);
        var clippedY = Math.max(y, 0);
        var newWidth = right - clippedX;
        var newHeight = bottom - clippedY;
        var clippedWidth = Math.min(newWidth, imgWidth - clippedX);
        var clippedHeight = Math.min(newHeight, imgHeight - clippedY);
        return (new Rect(clippedX, clippedY, clippedWidth, clippedHeight)).floor();
    };
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=Rect.js.map