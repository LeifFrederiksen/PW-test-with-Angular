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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var document_service_1 = require("./document.service");
var pwFolderNav_service_1 = require("../pwFolderNav/pwFolderNav.service");
var globals_1 = require("../../shared/globals");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var DocumentListComponent = (function () {
    function DocumentListComponent(_dataService, pwFolderNavService) {
        var _this = this;
        this._dataService = _dataService;
        this.pwFolderNavService = pwFolderNavService;
        this.pageTitle = 'Documents';
        this.descriptionFilterByControl = new forms_1.FormControl();
        this.showLoadingLayer = false;
        console.log("In doclist-list.component.ts");
        if (pwFolderNavService) {
            this.subscription = pwFolderNavService.navNode$.subscribe(function (navNodeNavigation) {
                console.log("in doc list. navnode is: " + navNodeNavigation.getNavNode().properties["Description"]);
                if (navNodeNavigation)
                    _this.getDocumentsInNavNode(navNodeNavigation);
            });
        }
    }
    Object.defineProperty(DocumentListComponent.prototype, "globalSearchText", {
        set: function (searchValue) {
            console.log("document-list.component set globalSearchText: " + searchValue);
            if (!searchValue)
                return;
            // let document = <Document>({
            //     documentCode: "element.instanceId",
            //     instanceId: "element.instanceId",
            //     description: "element.properties.Description",
            //     properties: null
            // });
            // this.documents = new Array();
            // this.documents.push(document);
            this.startGlobalSearch(searchValue);
        },
        enumerable: true,
        configurable: true
    });
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.descriptionFilterByControl.valueChanges.debounceTime(500).distinctUntilChanged().subscribe(function (value) { return _this.descriptionFilterBy = value; });
        // Faking...
        // this.documents = new Array();
        // this.documents.push(new Document("ole","bole","olebole",null));
        // this.documents.push(new Document("ole","bole","enlanglangsmøre",null));
    };
    DocumentListComponent.prototype.getDocumentsInNavNode = function (navNodeNavigation) {
        console.log("start search");
        this.toggleLoadingLayer(true);
        var searcher = this._dataService.getDocumentsInNavNode(globals_1.Globals.getInstance().getRepository(), navNodeNavigation.getNavNode());
        this.subscribeSearcher(searcher, navNodeNavigation);
    };
    DocumentListComponent.prototype.getNumberOfDocuments = function () {
        return this.documents ? this.documents.length : 0;
    };
    DocumentListComponent.prototype.getPWUrl = function (document) {
        return "pw://" + globals_1.Globals.getInstance().getRepository().properties["Location"] + "/Documents/D{" + document.instanceId + "}";
    };
    DocumentListComponent.prototype.openPW = function (document) {
        window.location.href = this.getPWUrl(document);
    };
    DocumentListComponent.prototype.startGlobalSearch = function (searchString) {
        this.toggleLoadingLayer(true);
        var searcher = this._dataService.getDocumentsByDescription(globals_1.Globals.getInstance().getRepository(), searchString);
        this.subscribeSearcher(searcher, null);
    };
    DocumentListComponent.prototype.subscribeSearcher = function (searcher, navNodeNavigation) {
        var _this = this;
        searcher.subscribe(function (documents) {
            if (navNodeNavigation && navNodeNavigation.doAdd()) {
                console.log("adding");
                if (!_this.documents) {
                    _this.documents = new Array();
                }
                for (var d = 0; d < documents.length; d++) {
                    _this.documents.push(documents[d]);
                }
            }
            else {
                console.log("not adding");
                _this.documents = documents;
            }
        }, function (error) {
            _this.errorMessage = error;
            _this.toggleLoadingLayer(false);
        }, function () { _this.toggleLoadingLayer(false); });
    };
    DocumentListComponent.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    DocumentListComponent.prototype.openDocument = function (document) {
        this._dataService.downloadDocument(globals_1.Globals.getInstance().getRepository(), document);
    };
    return DocumentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DocumentListComponent.prototype, "globalSearchText", null);
DocumentListComponent = __decorate([
    core_1.Component({
        selector: 'pm-documents',
        moduleId: module.id,
        templateUrl: 'document-list.component.html?v=' + globals_1.Globals.getInstance().version
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [document_service_1.DocumentService, pwFolderNav_service_1.PWFolderNavService])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=document-list.component.js.map