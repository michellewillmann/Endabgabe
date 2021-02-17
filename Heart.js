var endabgabe;
(function (endabgabe) {
    var Heart = /** @class */ (function () {
        function Heart(_position, _velocity) {
            this.position = new endabgabe.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        Heart.prototype.draw = function (_color, _particleRadius) {
            endabgabe.crc2.beginPath();
            endabgabe.crc2.strokeStyle = _color;
            endabgabe.crc2.fillStyle = _color;
            endabgabe.crc2.moveTo(this.position.x, this.position.y);
            endabgabe.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y - _particleRadius * 0.9);
            endabgabe.crc2.lineTo(this.position.x + _particleRadius * 0.7, this.position.y - _particleRadius * 0.5);
            endabgabe.crc2.lineTo(this.position.x, this.position.y + _particleRadius * 2);
            endabgabe.crc2.lineTo(this.position.x - _particleRadius * 0.7, this.position.y - _particleRadius * 0.5);
            endabgabe.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y - _particleRadius * 0.9);
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
            endabgabe.crc2.stroke();
            endabgabe.crc2.fill();
        };
        return Heart;
    }());
    endabgabe.Heart = Heart;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Heart.js.map