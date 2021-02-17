import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
import { unwatchFile } from "fs";

export namespace endabgabe {
    
    interface Rocket {
        [type:string]:string | string[];
    }

    let rocket: Mongo.Collection;
    let databaseUrl:string="mongodb+srv://michellewillmann:hallo@cluster0.eivgu.mongodb.net/feuerwerk?retryWrites=true&w=majority"
    startServer();
    connectToDatabase(databaseUrl);

    function startServer():void{
        let server: Http.Server=Http.createServer();
        let port: number|string|undefined = process.env.PORT;
        if (port == undefined)
        port= 5001;

        server.listen(port);
        server.addListener("request",handleRequest);
    }
    let db:Mongo.Db;
    async function connectToDatabase(_url:string):Promise<void>{
        
        let options: Mongo.MongoClientOptions ={ useNewUrlParser:true, useUnifedTopology:true};
        let mongoClient:Mongo.MongoClient= new Mongo.MongoClient(_url,options);

        await mongoClient.connect();
        rocket=mongoClient.db("feuerwerk").collection("rockets");
        console.log("database connected:"+ rocket);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let verify: string | string[] = url.query["command"];                                  //prüfen welcher command ausgeführt wurde


        switch (verify) {
            case "retrieve": getRocketsFromDb(_request, _response);
                break;
            case "delete": deleteRocket(_request, _response);
                break;
            case "update": updateRocket(_request, _response);
                break;
            default:
                for (let key in url.query) {
                    _response.write(key + " : " + url.query[key] + "\n")                           //Schlüssel-Werte-Paar jeweils in Ausgabe an Client zurück
                }
                storeRocket(url.query);
                _response.end();
        }
    }


    async function getRocketsFromDb(_request:Http.IncomingMessage,_response:Http.ServerResponse): Promise<void>{
        let results: Mongo.Cursor=rocket.find();
        let rockets:string[]= await results.toArray();
        _response.write(JSON.stringify(rockets));
        _response.end();
    }
    async function deleteRocket(_request:Http.IncomingMessage,_response:Http.ServerResponse): Promise<void>{
        let url:Url.UrlWithParsedQuery=Url.parse(_request.url,true);
        let rocketName:string|string[]=url.query["rocket"];
        rocket.deleteOne({"Name": rocketName});
        _response.write("rocket deleted!");
        _response.end();
    }
    async function updateRocket(_request:Http.IncomingMessage,_response:Http.ServerResponse): Promise<void>{
        let url:Url.UrlWithParsedQuery=Url.parse(_request.url,true);
        let oldName:string|string[]=url.query["rocket"];
        let rocketName:string|string[]=url.query["Name"];
        let rocketColor:string|string[]=url.query["Color"];
        let rocketDuration:string|string[]=url.query["Duration"];
        let rocketRadius:string|string[]=url.query["Radius"];

        rocket.updateOne({"Name": oldName},{$set: {"Name": rocketName, "Color":rocketColor,"Duration":rocketDuration, "Radius": rocketRadius}});
        _response.write("rocket updated!");
        _response.end();

    }
    function storeRocket(data:Rocket):void{
        rocket.insertOne(data);
    }
}