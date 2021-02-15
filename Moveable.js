var endabgabe;
(function (endabgabe) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new endabgabe.Vector(0, 0);
            this.velocity = new endabgabe.Vector(0, 0);
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