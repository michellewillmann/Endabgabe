namespace endabgabe{
     export class Particel {
         public x:number;
         public y: number;
         public velocity: Vector;
         public opacity:number;
         public color: string;

         constructor(x:number,y:number,color:string,velocity:Vector){
             this.x=x;
             this.y=y;
             this.color=color;
             this.velocity=velocity;
             this.opacity=1;
         }
         public draw():void{

         }
         public move(): void{
             this.draw();
             this.velocity.x *= friction;
             this.velocity.y *= friction;
             this.velocity.y += gravity;
             this.x += this.velocity.x;
             this.y += this.velocity.y;
             this.opacity -= 0.009;
         }
     }
}