namespace endabgabe{
    export class Moveable{
        public position:Vector;
        public velocity:Vector;
        
        constructor(_position?:Vector){
            
            if(_position)
            this.position=_position.copy();
            else
            this.position= new Vector(0, 0);
            this.velocity= new Vector(0, 0);
        }
    public move(_timeslice:number):void {
        let offset:Vector=this.velocity.copy();
        offset.scale(_timeslice);
        this.position.add(offset);
    }
    public abstract draw(): void;
}}