var endabgabe;
(function (endabgabe) {
    var Particel = /** @class */ (function () {
        function Particel(x, y, color, velocity) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = velocity;
        }
        Particel.prototype.draw = function (_color, _particleRadius) {
        };
        Particel.prototype.move = function () {
            this.velocity = endabgabe.Vector.getSum(this.velocity, new endabgabe.Vector(0, 0.01));
            this.position = endabgabe.Vector.getSum(this.position, this.velocity);
        };
        return Particel;
    }());
    endabgabe.Particel = Particel;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Partikel.js.map