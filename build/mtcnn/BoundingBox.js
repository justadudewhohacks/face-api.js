"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect_1 = require("../Rect");
var BoundingBox = /** @class */ (function () {
    function BoundingBox(_left, _top, _right, _bottom) {
        this._left = _left;
        this._top = _top;
        this._right = _right;
        this._bottom = _bottom;
    }
    Object.defineProperty(BoundingBox.prototype, "left", {
        get: function () {
            return this._left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "top", {
        get: function () {
            return this._top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "right", {
        get: function () {
            return this._right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    BoundingBox.prototype.toSquare = function () {
        var _a = this, left = _a.left, top = _a.top, right = _a.right, bottom = _a.bottom;
        var off = (Math.abs(this.width - this.height) / 2);
        if (this.width < this.height) {
            left -= off;
            right += off;
        }
        if (this.height < this.width) {
            top -= off;
            bottom += off;
        }
        return new BoundingBox(left, top, right, bottom);
    };
    BoundingBox.prototype.round = function () {
        return new BoundingBox(Math.round(this.left), Math.round(this.top), Math.round(this.right), Math.round(this.bottom));
    };
    BoundingBox.prototype.padAtBorders = function (imageHeight, imageWidth) {
        var w = this.width + 1;
        var h = this.height + 1;
        var dx = 1;
        var dy = 1;
        var edx = w;
        var edy = h;
        var x = this.left;
        var y = this.top;
        var ex = this.right;
        var ey = this.bottom;
        if (ex > imageWidth) {
            edx = -ex + imageWidth + w;
            ex = imageWidth;
        }
        if (ey > imageHeight) {
            edy = -ey + imageHeight + h;
            ey = imageHeight;
        }
        if (x < 1) {
            edy = 2 - x;
            x = 1;
        }
        if (y < 1) {
            edy = 2 - y;
            y = 1;
        }
        return { dy: dy, edy: edy, dx: dx, edx: edx, y: y, ey: ey, x: x, ex: ex, w: w, h: h };
    };
    BoundingBox.prototype.calibrate = function (region) {
        return new BoundingBox(this.left + (region.left * this.width), this.top + (region.top * this.height), this.right + (region.right * this.width), this.bottom + (region.bottom * this.height)).toSquare().round();
    };
    BoundingBox.prototype.toRect = function () {
        return new Rect_1.Rect(this.left, this.top, this.width, this.height);
    };
    return BoundingBox;
}());
exports.BoundingBox = BoundingBox;
//# sourceMappingURL=BoundingBox.js.map