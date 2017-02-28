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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var RepositoryService = (function () {
    function RepositoryService(_http) {
        this._http = _http;
        this._baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
        this._dataUrl = this._baseUrl + "/repositories";
    }
    RepositoryService.prototype.getRepositories = function () {
        var _this = this;
        console.log("In getRepositories");
        var headers = new http_1.Headers();
        //  headers.append('Accept', 'application/json;odata=verbose');
        // headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
        return this._http.get(this._dataUrl /*, { headers: headers} */).map(function (response) { return _this.mapRepositories(response); });
    };
    RepositoryService.prototype.mapRepositories = function (response) {
        return response.json().instances.map(this.toRepository);
    };
    RepositoryService.prototype.toRepository = function (element) {
        var repository = ({
            instanceId: element.instanceId,
            properties: element.properties
        });
        return repository;
    };
    RepositoryService.prototype.handleError = function (error) {
        console.log("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return RepositoryService;
}());
RepositoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RepositoryService);
exports.RepositoryService = RepositoryService;
//# sourceMappingURL=repository.service.js.map