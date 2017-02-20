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
var navnode_1 = require("./navnode");
var NavNodeService = (function () {
    // https://pwapp.metroselskabet.dk/bwsg/v2.4/repositories
    function NavNodeService(_http) {
        this._http = _http;
        this._baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
        this._schema = "NAVIGATION";
        this._repository = "Bentley.PW--PWSRV.ad.m.dk~3AMetro";
    }
    NavNodeService.prototype.getRootNavNodes = function (repository) {
        debugger;
        return this.getNavNodes(repository, null, false);
    };
    NavNodeService.prototype.getNavNodes = function (repository, parent, loadDocuments) {
        var _this = this;
        console.log("In getNavNodes - got this repo: " + repository.instanceId);
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/NavNode";
        if (parent != null) {
            dataUrl += "/" + parent.instanceId + "/NavNode";
        }
        if (!loadDocuments) {
            dataUrl += "?$filter=Key_ClassName+eq+'Project'";
        }
        console.log("DataUrl: " + dataUrl);
        var headers = new http_1.Headers();
        // headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
        return this._http.get(dataUrl, { headers: headers }).map(function (response) { return _this.mapNavNodes(response); });
    };
    NavNodeService.prototype.mapNavNodes = function (response) {
        return response.json().instances.map(this.toNavNode);
    };
    NavNodeService.prototype.toNavNode = function (element) {
        // console.log("toNavNode: " + element);
        var navNode = new navnode_1.NavNode(element.instanceId, element.properties);
        // console.log('Parsed navnode:', navNode);
        return navNode;
    };
    NavNodeService.prototype.handleError = function (error) {
        console.log("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return NavNodeService;
}());
NavNodeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NavNodeService);
exports.NavNodeService = NavNodeService;
//# sourceMappingURL=navnode.service.js.map