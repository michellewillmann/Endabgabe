var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var endabgabe;
(function (endabgabe) {
    var Star = /** @class */ (function (_super) {
        __extends(Star, _super);
        function Star(_position, _size) {
            var _this = _super.call(this) || this;
            _this.position = _position;
            _this.size = _size;
            return _this;
        }
        Star.prototype.draw = function () {
            throw new Error("Method not implemented.");
        };
        Star.prototype.drawStars = function () {
            var stars = 1000;
            var radiusParticle = 0.5;
            var particle = new Path2D();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.fillStyle = "white";
            for (var drawn = 0; drawn < stars; drawn++) {
                endabgabe.crc2.save();
                var x = (Math.random() - 0.5) * this.size.x;
                var y = (Math.random() - 0.5) * this.size.y;
                endabgabe.crc2.translate(x, y);
                endabgabe.crc2.fill(particle);
                endabgabe.crc2.restore();
            }
            endabgabe.crc2.restore();
        };
        return Star;
    }(endabgabe.Moveable));
    endabgabe.Star = Star;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Star.js.map