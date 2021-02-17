namespace endabgabe{
    export abstract class Moveable{
        public position:Vector;
        public velocity:Vector;
        public color:string;
        
        constructor(_positionX:number,_positionY:number, _color:string,){
            this.position= new Vector(0,0);
            this.position.x=_positionX;
            this.position.y=_positionY;
            this.color=_color;
        }
    public move(_timeslice:number):void {
        let offset:Vector=this.velocity.copy();
        offset.scale(_timeslice);
        this.position.add(offset);
    }
    public abstract draw(): void;
}}