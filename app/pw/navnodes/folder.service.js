"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var FolderTreeService = (function () {
    // https://pwapp.metroselskabet.dk/bwsg/v2.4/repositories
    function FolderTreeService(_http) {
        this._http = _http;
        this._baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
        this._schema = "NAVIGATION";
        this._repository = "Bentley.PW--PWSRV.ad.m.dk~3AMetro";
    }
    FolderTreeService.prototype.getRootFolders = function () {
        var _this = this;
        console.log("In getRootFolders");
        var dataUrl = this._baseUrl + "/repositories/" + this._repository + "/" + this._schema + "NavNode";
        var headers = new http_1.Headers();
        headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
        return this._http.get(dataUrl, { headers: headers }).map(function (response) { return _this.mapDocuments(response); });
    };
    FolderTreeService.prototype.getDocumentsByDescription = function (/* repository: IRepository, */ description) {
        var _this = this;
        console.log("In getDocumentsByDescription");
        var filter = "$filter=Description+like+" + "'" + description + "'";
        var dataUrl = this._baseUrl + "/repositories/" + repository + "/" + this._schema + "/Document?" + filter;
        console.log("URL: " + dataUrl);
        var dummyDocs = [
            {
                documentCode: "123",
                description: "descdesc"
            },
            {
                documentCode: "456",
                description: "something else"
            }
        ];
        // return Observable.create(() => { return dummyDocs });
        var headers = new http_1.Headers();
        headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
        return this._http.get(dataUrl, { headers: headers }).map(function (response) { return _this.mapDocuments(response); });
    };
    FolderTreeService.prototype.mapDocuments = function (response) {
        return response.json().instances.map(this.toDocument);
    };
    FolderTreeService.prototype.toDocument = function (element) {
        console.log("toDocument: " + element);
        var document = ({
            documentCode: element.instanceId,
            description: element.properties.Description
        });
        console.log('Parsed document:', document);
        return document;
    };
    FolderTreeService.prototype.handleError = function (error) {
        console.log("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return FolderTreeService;
}());
FolderTreeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FolderTreeService);
exports.FolderTreeService = FolderTreeService;
//# sourceMappingURL=folder.service.js.map