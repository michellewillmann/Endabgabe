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
var url_1 = require("url");
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", handleLoad);
    var url = "https://feuerwerk.herokuapp.com";
    var buttonClicked = 0;
    var rockets;
    var currentRocket;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        endabgabe.crc2 = canvas.getContext("2d");
        document.querySelector("#showButton").addEventListener("click", showRocket);
        document.querySelector("updateButton").addEventListener("click", updateRocket);
        document.querySelector("saveButton").addEventListener("click", saveRocket);
        document.querySelector("resetButton").addEventListener("click", resetRocket);
        document.querySelector("deleteButton").addEventListener("click", deleteRocket);
        document.querySelector("dropButton").addEventListener("click", showAllRockets);
        document.querySelector("canvas").addEventListener("click", handleAnimate);
    }
    function showRocket() {
        var allComponets = new FormData(document.forms[0]);
        var rocket = "Name deiner Rakete:" + allComponets.get("Name") + "<br>" + "Explosionsgröße:" + allComponets.get("Size") + "<br>" + "Partikelanzahl:" + allComponets.get("Amount") + "<br>" + "Color:" + allComponets.get("Color") + "<br>" + "Formen:" + allComponets.get("Formen") + "<br>" + "Dauer des Feuerwerks:" + allComponets.get("Duration") + "s" + "<br>";
        document.querySelector("div#yourRocket").innerHTML = rocket;
    }
    function updateRocket() {
        return __awaiter(this, void 0, void 0, function () {
            var newData, query, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newData = new FormData(document.forms[0]);
                        query = new url_1.URLSearchParams(newData);
                        return [4 /*yield*/, fetch(url + "?" + "command=update&rocket=" + currentRocket + "&" + query.toString())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        alert(responseText);
                        return [2 /*return*/];
                }
            });
        });
    }
    function resetRocket() {
        document.forms[0].reset();
        document.getElementById("yourRocket").innerHTML = "";
    }
    function saveRocket(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var form, query, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("save Rocket");
                        form = new FormData(document.forms[0]);
                        query = new url_1.URLSearchParams(form);
                        return [4 /*yield*/, fetch(url + "?" + query.toString())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        alert(responseText);
                        return [2 /*return*/];
                }
            });
        });
    }
    function getSavedRocketsFromDb() {
        return __awaiter(this, void 0, void 0, function () {
            var response, _i, rockets_1, rocket, rocketName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url + "?" + "command=retrieve")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        rockets = _a.sent();
                        for (_i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
                            rocket = rockets_1[_i];
                            rocketName = document.createElement("a");
                            rocketName.innerHTML = rocket["Name"];
                            document.querySelector("div#dropupContent").appendChild(rocketName);
                            rocketName.addEventListener("click", chooseRocket);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function chooseRocket(_event) {
        currentRocket = _event.target.innerHTML;
        var parent = document.querySelector("div#dropupContent");
        parent.style.display = "none";
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
            var rocket = rockets_2[_i];
            if (rocket["Name"] == currentRocket) {
                document.querySelector("div#yourRocket").innerHTML = "Name:" + rocket["Name"] + "<br>" + "Explosionsgröße:" + rocket["Size"] + "<br>" + "Partikelanzahl:" + rocket["Amount"] + "<br>" + "Color:" + rocket["Color"] + "<br>" + "Formen:" + rocket["Formen"] + "<br>" + "Dauer des Feuerwerks:" + rocket["Duration"] + "s" + "<br>";
                fillInputFields(rocket);
            }
        }
        buttonClicked++;
    }
    function fillInputFields(rocket) {
        document.querySelector("input#name").value = rocket["Name"];
        document.querySelector("input#color").value = rocket["Color"];
        document.querySelector("input#duration").value = rocket["Duration"];
        document.querySelector("input#amount").value = rocket["Amount"];
        document.querySelector("select#select-form").value = rocket["Formen"];
        switch (rocket["Size"]) {
            case "small":
                document.querySelector("input#small").checked = true;
                break;
            case "medium":
                document.querySelector("input#medium").checked = true;
                break;
            case "big":
                document.querySelector("input#big").checked = true;
                break;
        }
    }
    function deleteRocket() {
        return __awaiter(this, void 0, void 0, function () {
            var response, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(currentRocket);
                        return [4 /*yield*/, fetch(url + "?" + "command=delete&rocket=" + currentRocket)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        text = _a.sent();
                        alert(text);
                        document.querySelector("div#yourRocket").innerHTML = "";
                        return [2 /*return*/];
                }
            });
        });
    }
    function showAllRockets() {
        var parent = document.querySelector("div#dropupContent");
        if (buttonClicked % 2 == 0) {
            getSavedRocketsFromDb();
            parent.style.display = "block";
        }
        else {
            parent.style.display = "none";
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        buttonClicked++;
    }
    function handleAnimate(_event) {
        var cursorX = _event.pageX - document.querySelector("canvas").offsetLeft;
        var cursorY = _event.pageY - document.querySelector("canvas").offsetTop;
        var form = new FormData(document.forms[0]);
        var color = form.get("Color");
        var duration = Number(form.get("Duration")) * 1000;
        var radius = 0;
        var radiusEnde = Number(form.get("Radius")) * 10;
        animate(radius, radiusEnde, duration);
    }
    function animate(radius, radiusEnde, duration) {
        setTimeout(function () {
            if (radius <= radiusEnde) {
                console.log("Test");
                radius++;
                animate(radius, radiusEnde, duration);
            }
        }, duration / radiusEnde);
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map