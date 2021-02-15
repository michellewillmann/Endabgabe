namespace endabgabe {

    export class Star{

        position:Vector;
        size: Vector;

        constructor(_position:Vector,_size:Vector){
        this.position=_position;
        this.size=_size;
    }
    drawStars():void{
        let stars: number=1000;
        let radiusPartcile: number=0.5;
        let particle: Path2D= new Path2D();
        particle.arc(0, 0, radiusPartcile, 0, 2 + Math.PI);
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.fillStyle="white";

        for (let drawn: number=0; drawn<stars;drawn++){
            crc2.save();
            let x : number=(Math.random()-0.5)*this.size.x;
            let y : number=(Math.random()-0.5)* this.size.y;
            crc2.translate(x,y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
  }
}