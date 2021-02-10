namespace Endabgabe_WiSe20_21_EIA2 {
    window.addEventListener("load",handleLoad);
    
    let crc2:CanvasRenderingContext2D;

    function handleLoad(_event:Event):void{
        let canvas: HTMLCanvasElement | null= document.querySelector("canvas");
        crc2 =< CanvasRenderingContext2D>canvas.getContext("2d");
    }
}