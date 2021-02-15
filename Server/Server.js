"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endabgabe = void 0;
var Http = require("http");
var Url = require("url");
var Mongo = require("mongodb");
var endabgabe;
(function (endabgabe) {
    var rocket;
    var databaseUrl = "mongodb+srv://mcihellewillmann:hallo@cluster0.eivgu.mongodb.net/feuerwerk?retryWrites=true&w=majority";
    startServer();
    connectToDatabase(databaseUrl);
    function startServer() {
        var server = Http.createServer();
        var port = process.env.PORT;
        if (port == undefined)
            port = 5001;
        server.listen(port);
        server.addListener("request", handleRequest);
    }
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function () {
            var options, mongoClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { useNewUrlParser: true, useUnifedTopology: true };
                        mongoClient = new Mongo.MongoClient(_url, options);
                        return [4 /*yield*/, mongoClient.connect()];
                    case 1:
                        _a.sent();
                        rocket = mongoClient.db("feuerwerk").collection("rockets");
                        console.log("database connected:" + rocket);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        var url = Url.parse(_request.url, true);
        var verify = url.query["command"]; //prüfen welcher command ausgeführt wurde
        switch (verify) {
            case "retrieve":
                getRocketsFromDb(_request, _response);
                break;
            case "delete":
                deleteRocket(_request, _response);
                break;
            case "update":
                updateRocket(_request, _response);
                break;
            default:
                for (var key in url.query) {
                    _response.write(key + " : " + url.query[key] + "\n"); //Schlüssel-Werte-Paar jeweils in Ausgabe an Client zurück
                }
                storeRocket(url.query);
                _response.end();
        }
    }
    function getRocketsFromDb(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var results, rockets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        results = rocket.find();
                        return [4 /*yield*/, results.toArray()];
                    case 1:
                        rockets = _a.sent();
                        _response.write(JSON.stringify(rockets));
                        _response.end();
                        return [2 /*return*/];
                }
            });
        });
    }
    function deleteRocket(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var url, rocketName;
            return __generator(this, function (_a) {
                url = Url.parse(_request.url, true);
                rocketName = url.query["rocket"];
                rocket.deleteOne({ "Name": rocketName });
                _response.write("rocket deleted!");
                _response.end();
                return [2 /*return*/];
            });
        });
    }
    function updateRocket(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var url, oldName, rocketName, rocketColor, rocketDuration, rocketRadius;
            return __generator(this, function (_a) {
                url = Url.parse(_request.url, true);
                oldName = url.query["rocket"];
                rocketName = url.query["Name"];
                rocketColor = url.query["Color"];
                rocketDuration = url.query["Duration"];
                rocketRadius = url.query["Radius"];
                rocket.updateOne({ "Name": oldName }, { $set: { "Name": rocketName, "Color": rocketColor, "Duration": rocketDuration, "Radius": rocketRadius } });
                _response.write("rocket updated!");
                _response.end();
                return [2 /*return*/];
            });
        });
    }
    function storeRocket(data) {
        rocket.insertOne(data);
    }
})(endabgabe = exports.endabgabe || (exports.endabgabe = {}));
//# sourceMappingURL=Server.js.map