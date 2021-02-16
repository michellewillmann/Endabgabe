var endabgabe;
(function (endabgabe) {
    var Particel = /** @class */ (function () {
        function Particel(x, y, color, velocity) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = velocity;
            this.opacity = 1;
        }
        Particel.prototype.draw = function () {
        };
        Particel.prototype.move = function () {
            this.draw();
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            this.velocity.y += gravity;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.opacity -= 0.009;
        };
        return Particel;
    }());
    endabgabe.Particel = Particel;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Partikel.js.map