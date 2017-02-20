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
var navnode_1 = require("../navnodes/navnode");
var document_service_1 = require("./document.service");
var globals_1 = require("../shared/globals");
var DocumentListComponent = (function () {
    function DocumentListComponent(_dataService) {
        this._dataService = _dataService;
        this.pageTitle = 'Documents';
        this.showLoadingLayer = false;
        // this.toggleLoadingLayer(true);
    }
    Object.defineProperty(DocumentListComponent.prototype, "navNode", {
        set: function (navNode) {
            console.log("list. node set: " + navNode);
            console.log("list. node set - repo is: " + globals_1.Globals.getInstance().getRepository().instanceId);
            this.currentNavNode = navNode;
            if (navNode)
                this.getDocumentsInNavNode(this.currentNavNode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "globalSearchText", {
        set: function (searchValue) {
            console.log("ument-list.component set globalSearchText: " + searchValue);
            if (!searchValue)
                return;
            this.startGlobalSearch(searchValue);
        },
        enumerable: true,
        configurable: true
    });
    DocumentListComponent.prototype.getDocumentsInNavNode = function (navNode) {
        console.log("start search");
        this.toggleLoadingLayer(true);
        // var searcher = this._dataService.getDocumentsByDescription(repository, navNode, this.documentDescriptionSearch);
        var ole;
        var searcher = this._dataService.getDocumentsInNavNode(globals_1.Globals.getInstance().getRepository(), navNode);
        /*
        searcher.subscribe(
                            documents => this.documents = documents,
                            error => { this.errorMessage = <any>error;
                                        this.toggleLoadingLayer(false);
                                        },
                            () => { this.toggleLoadingLayer(false); }
                            );
*/
        this.subscribeSearcher(searcher);
    };
    DocumentListComponent.prototype.getNumberOfDocuments = function () {
        return this.documents ? this.documents.length : 0;
    };
    DocumentListComponent.prototype.startGlobalSearch = function (searchString) {
        this.toggleLoadingLayer(true);
        var searcher = this._dataService.getDocumentsByDescription(globals_1.Globals.getInstance().getRepository(), searchString);
        this.subscribeSearcher(searcher);
    };
    DocumentListComponent.prototype.subscribeSearcher = function (searcher) {
        var _this = this;
        searcher.subscribe(function (documents) {
            console.log(documents.length);
            _this.documents = documents;
        }, function (error) {
            _this.errorMessage = error;
            _this.toggleLoadingLayer(false);
        }, function () { _this.toggleLoadingLayer(false); });
    };
    DocumentListComponent.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    DocumentListComponent.prototype.downloadDocument = function (document) {
        this._dataService.downloadDocument(globals_1.Globals.getInstance().getRepository(), document);
    };
    return DocumentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof navnode_1.INavNode !== "undefined" && navnode_1.INavNode) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof navnode_1.INavNode !== "undefined" && navnode_1.INavNode) === "function" && _b || Object])
], DocumentListComponent.prototype, "navNode", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DocumentListComponent.prototype, "globalSearchText", null);
DocumentListComponent = __decorate([
    core_1.Component({
        selector: 'pm-documents',
        moduleId: module.id,
        templateUrl: 'document-list.component.html',
        styleUrls: ['document-list.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof document_service_1.DocumentService !== "undefined" && document_service_1.DocumentService) === "function" && _c || Object])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
var _a, _b, _c;
//# sourceMappingURL=document-list.component.js.map