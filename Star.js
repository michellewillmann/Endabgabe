var endabgabe;
(function (endabgabe) {
    var Star = /** @class */ (function () {
        function Star(_position, _size) {
            this.position = _position;
            this.size = _size;
        }
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
    }());
    endabgabe.Star = Star;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Star.js.map