var endabgabe;
(function (endabgabe) {
    var Circle = /** @class */ (function () {
        function Circle(_position, _velocity) {
            this.position = new endabgabe.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        Circle.prototype.drawCircles = function (_color) {
            var circles;
            ();
            var radiusPartcile = 0.5;
            var particle = new Path2D();
            particle.arc(0, 0, radiusPartcile, 0, 2 + Math.PI);
            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.arc(this.position.x, this.position.y);
        };
        return Circle;
    }());
    endabgabe.Circle = Circle;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Circle.js.map