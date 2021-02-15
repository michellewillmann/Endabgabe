import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace endabgabe {
    
    interface Rocket {
        [type:string]:string | string[];
    }

    let rocket: Mongo.Collection;
    let databaseUrl:string
}