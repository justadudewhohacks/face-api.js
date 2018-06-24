"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Rect.prototype.floor = function () {
        return new Rect(Math.floor(this.x), Math.floor(this.y), Math.floor(this.width), Math.floor(this.height));
    };
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=Rect.js.map