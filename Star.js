var endabgabe;
(function (endabgabe) {
    var Star = /** @class */ (function () {
        function Star(_position, _size) {
            this.position = _position;
            this.size = _size;
        }
        Star.prototype.drawStars = function () {
            var stars = 1000;
            var radiusPartcile = 0.5;
            var particle = new Path2D();
            particle.arc(0, 0, radiusPartcile, 0, 2 + Math.PI);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "white";
            for (var drawn = 0; drawn < stars; drawn++) {
                crc2.save();
                var x = (Math.random() - 0.5) * this.size.x;
                var y = (Math.random() - 0.5) * this.size.y;
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        };
        return Star;
    }());
    endabgabe.Star = Star;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Star.js.map