var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (pt) {
        return new Point(this.x + pt.x, this.y + pt.y);
    };
    Point.prototype.sub = function (pt) {
        return new Point(this.x - pt.x, this.y - pt.y);
    };
    Point.prototype.mul = function (pt) {
        return new Point(this.x * pt.x, this.y * pt.y);
    };
    Point.prototype.div = function (pt) {
        return new Point(this.x / pt.x, this.y / pt.y);
    };
    return Point;
}());
export { Point };
//# sourceMappingURL=Point.js.map