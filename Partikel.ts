namespace endabgabe{
     export class Particel {
         public x:number;
         public y: number;
         public velocity: Vector;
         public color: string;
         public position:Vector;

         constructor(x:number,y:number,color:string,velocity:Vector){
             this.x=x;
             this.y=y;
             this.color=color;
             this.velocity=velocity;
         }
         public draw(_color:string,_particleRadius:number):void{

         }
         public move(): void{

             this.velocity=Vector.getSum(this.velocity, new Vector(0,0.01))
             this.position=Vector.getSum(this.position, this.velocity);
         }
     }
}