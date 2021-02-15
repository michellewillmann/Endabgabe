namespace endabgabe {
    window.addEventListener("load",handleLoad);
    
    let url:string="https://feuerwerk.herokuapp.com";
    let buttonClicked: number=0;
    let rockets: any;
    let currentRocket: string;
    export let crc2:CanvasRenderingContext2D;
    export let imageData: ImageData;
    

    function handleLoad(_event:Event):void{
        let canvas: HTMLCanvasElement | null= document.querySelector("canvas");
        crc2 =< CanvasRenderingContext2D>canvas.getContext("2d");
        document.querySelector("#showButton").addEventListener("click", showRocket);
        document.querySelector("updateButton").addEventListener("click", updateRocket);
        document.querySelector("saveButton").addEventListener("click", saveRocket);
        document.querySelector("resetButton").addEventListener("click", resetRocket);
        document.querySelector("deleteButton").addEventListener("click", deleteRocket);
        document.querySelector("dropButton").addEventListener("click", showAllRockets);
        document.querySelector("canvas").addEventListener("click", handleAnimate);
    }


function showRocket():void {
    let allComponets :FormData=new FormData(document.forms[0]);
    let rocket = "Name deiner Rakete:"+ allComponets.get("Name")+"<br>"+"Explosionsgröße:" + allComponets.get("Size") + "<br>" + "Partikelanzahl:" + allComponets.get("Amount") + "<br>" + "Color:" + allComponets.get("Color") + "<br>"+ "Formen:" + allComponets.get("Formen") + "<br>" + "Dauer des Feuerwerks:" + allComponets.get("Duration") +"s"+"<br>";
    document.querySelector("div#yourRocket").innerHTML= rocket;
}

async function updateRocket(): Promise<void> {
   let newData: FormData= new FormData(document.forms[0]);
   let query: URLSearchParams= new URLSearchParams(<any>newData);
   let response:Response=await fetch(url+"?"+"command=update&rocket="+currentRocket +"&"+query.toString());
   let responseText:string=await response.text();
   alert(responseText);
}

function resetRocket ():void{
    document.forms[0].reset();
    document.getElementById("yourRocket").innerHTML ="";
}

async function saveRocket(_event:Event): Promise<void> {
    console.log("save Rocket");
    let form:FormData = new FormData(document.forms[0]);
    let query: URLSearchParams=new URLSearchParams(<any>form);
    let response:Response=await fetch(url +"?"+query.toString());
    let responseText:string=await response.text();
    alert(responseText);
}

async function getSavedRocketsFromDb() :Promise<void> {
    let response:Response=await fetch(url+"?"+"command=retrieve");
    rockets=await response.json();
    
    for (let rocket of rockets){
        let rocketName: HTMLElement=document.createElement("a");
        rocketName.innerHTML=rocket["Name"];
        (<HTMLElement>document.querySelector("div#dropupContent")).appendChild(rocketName);
        rocketName.addEventListener("click", chooseRocket);  
    }
}
function chooseRocket(_event:Event):void{
    currentRocket=(<HTMLElement>_event.target).innerHTML;
    let parent:HTMLElement=document.querySelector("div#dropupContent");
    parent.style.display="none";
    
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    for (let rocket of rockets){
        if (rocket["Name"]==currentRocket){
            document.querySelector("div#yourRocket").innerHTML="Name:"+ rocket["Name"]+"<br>"+ "Explosionsgröße:" +  rocket["Size"]+ "<br>" + "Partikelanzahl:" + rocket["Amount"] + "<br>" + "Color:" + rocket["Color"] + "<br>"+ "Formen:" + rocket["Formen"] + "<br>" + "Dauer des Feuerwerks:"+ rocket["Duration"]+ "s" +"<br>";
            fillInputFields(rocket);

        }
    }
    buttonClicked++;
}
function fillInputFields(rocket:any):void{
    (<HTMLInputElement>document.querySelector("input#name")).value=rocket["Name"];
    (<HTMLInputElement>document.querySelector("input#color")).value=rocket["Color"];
    (<HTMLInputElement>document.querySelector("input#duration")).value=rocket["Duration"];
    (<HTMLInputElement>document.querySelector("input#amount")).value=rocket["Amount"];
    (<HTMLInputElement>document.querySelector("select#select-form")).value=rocket["Formen"];
    switch(rocket["Size"]){
        case "small":
            (<HTMLInputElement>document.querySelector("input#small")).checked=true;
            break;
        case "medium": 
            (<HTMLInputElement>document.querySelector("input#medium")).checked=true;
            break;
        case "big":
            (<HTMLInputElement>document.querySelector("input#big")).checked=true;
            break;
    }
}
async function deleteRocket(): Promise<void> {
    console.log(currentRocket);
    let response:Response=await fetch(url+"?" + "command=delete&rocket="+ currentRocket);
    let text:string=await response.text();
    alert(text);
    document.querySelector("div#yourRocket").innerHTML="";
}

function showAllRockets():void{
    let parent: HTMLElement=document.querySelector("div#dropupContent");

    if(buttonClicked % 2 == 0){
        getSavedRocketsFromDb();
        parent.style.display ="block";
    }
    else {
        parent.style.display="none";
        while (parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }
    buttonClicked++;
}


function handleAnimate(_event:MouseEvent):void{
    let cursorX: number=_event.pageX - document.querySelector("canvas").offsetLeft;
    let cursorY: number=_event.pageY - document.querySelector("canvas").offsetTop;

    let form: FormData= new FormData(document.forms[0]);
    let color:string=<string>form.get("Color");
    let duration:number= Number(form.get("Duration"))*1000;
    let radius:number=0;
    let radiusEnde: number=Number(form.get("Radius"))*10;
    animate(radius, radiusEnde, duration);

}
function animate(radius:number, radiusEnde:number, duration:number){
    setTimeout(function(){
        if(radius<= radiusEnde){
            console.log("Test");
            radius ++;
            animate(radius, radiusEnde, duration);
        }
    }, duration/ radiusEnde);
}}
