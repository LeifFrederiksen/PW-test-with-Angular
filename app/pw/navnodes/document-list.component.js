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
var document_service_1 = require("./document.service");
var DocumentListComponent = (function () {
    function DocumentListComponent(_dataService) {
        this._dataService = _dataService;
        this.pageTitle = 'Documents';
        this.showLoadingLayer = false;
        // this.toggleLoadingLayer(true);
    }
    DocumentListComponent.prototype.startSearch = function () {
        var _this = this;
        console.log("start search");
        this.toggleLoadingLayer(true);
        var searcher = this._dataService.getDocumentsByDescription(this.documentDescriptionSearch);
        // var searcher = this._dataService.getDocumentsByProject(this.project);
        searcher.subscribe(function (documents) { return _this.documents = documents; }, function (error) {
            _this.errorMessage = error;
            _this.toggleLoadingLayer(false);
        }, function () { _this.toggleLoadingLayer(false); });
    };
    DocumentListComponent.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    return DocumentListComponent;
}());
DocumentListComponent = __decorate([
    core_1.Component({
        selector: 'pm-documents',
        moduleId: module.id,
        templateUrl: 'document-list.component.html',
        styleUrls: ['document-list.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof document_service_1.DocumentService !== "undefined" && document_service_1.DocumentService) === "function" && _a || Object])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
function getRepositories() {
    /*
    var baseUrl = "https://pwapp.metroselskabet.dk/pwfs/v2.3";
    var url = baseUrl + "/Repositories";

    return $.ajax({
        url: url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            'Authorization': 'Basic ' + 'ole' + ':' + 'password'
        }
    });
*/
}
var _a;
//# sourceMappingURL=document-list.component.js.map