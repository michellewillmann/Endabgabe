var endabgabe;
(function (endabgabe) {
    var Moveable = /** @class */ (function () {
        function Moveable(_positionX, _positionY, _color) {
            this.position = new endabgabe.Vector(0, 0);
            this.position.x = _positionX;
            this.position.y = _positionY;
            this.color = _color;
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        return Moveable;
    }());
    endabgabe.Moveable = Moveable;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Moveable.js.map