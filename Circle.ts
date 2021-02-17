namespace endabgabe {
    export class Circle {

        position:Vector;
        velocity: Vector;
        crc2: RenderingContext;

        constructor(_position:Vector, _velocity: Vector){
            this.position = new Vector(0,0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
            
 
        }
        drawCircles(_color:string,_particleRadius):void{
            let circles: number;
            let radiusPartcile: number=0.5;
            let particle: Path2D= new Path2D();
            particle.arc(0, 0, radiusPartcile, 0, 2 + Math.PI);
           crc2.beginPath();
           crc2.fillStyle=_color;
           crc2.arc(this.position.x, this.position.y,_particleRadius, 0, 2*Math.PI);

    }
}}