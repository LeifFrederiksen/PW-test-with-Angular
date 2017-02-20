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
var DocumentService = (function () {
    // https://pwapp.metroselskabet.dk/bwsg/v2.4/repositories
    function DocumentService(_http) {
        this._http = _http;
        this._baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
        this._schema = "PW_WSG";
    }
    DocumentService.prototype.getDocumentsInNavNode = function (repository, navNode) {
        var _this = this;
        console.log("In getDocuments.");
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Project/" + navNode.properties["Key_InstanceId"] + "/PW_WSG.Document";
        console.log("dataurl: " + dataUrl);
        return this._http.get(dataUrl).map(function (response) { return _this.mapDocuments(response); });
    };
    DocumentService.prototype.getDocumentsByDescription = function (repository, description) {
        var _this = this;
        console.log("In getDocumentsByDescription");
        var operator = "like";
        // var operator: string = "eq";
        var filter = "$filter=Description+" + operator + "+'" + description + "'";
        filter += "+and+IsLatest+eq+true";
        var top = 1000;
        filter += "&$top=" + top;
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Document?" + filter;
        console.log("URL: " + dataUrl);
        return this._http.get(dataUrl).map(function (response) { return _this.mapDocuments(response); });
    };
    DocumentService.prototype.downloadDocument = function (repository, document) {
        // https://pwapp.metroselskabet.dk/bwsg/v2.4/Repositories/Bentley.PW--PWSRV.ad.m.dk~3AMetro/PW_WSG/document/9bb8aec4-2691-424f-bac5-bef2646d94d5/$file
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Document/" + document.instanceId + "/$file";
        console.log("dataUrl for download: " + dataUrl);
        // window.open(dataUrl);
        window.location.href = dataUrl;
    };
    DocumentService.prototype.mapDocuments = function (response) {
        return response.json().instances.map(this.toDocument);
    };
    DocumentService.prototype.toDocument = function (element) {
        // console.log("toDocument: " + element);
        var document = ({
            documentCode: element.instanceId,
            instanceId: element.instanceId,
            description: element.properties.Description,
            properties: element.properties
        });
        // console.log('Parsed document:', document);
        return document;
    };
    DocumentService.prototype.handleError = function (error) {
        console.log("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DocumentService;
}());
DocumentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DocumentService);
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map