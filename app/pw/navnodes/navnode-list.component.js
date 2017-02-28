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
var navnode_service_1 = require("./navnode.service");
var pwFolderNav_service_1 = require("../pwFolderNav/pwFolderNav.service");
var globals_1 = require("../../shared/globals");
var NavNodeListComponent = (function () {
    function NavNodeListComponent(_dataService, pwFolderNavService) {
        this._dataService = _dataService;
        this.pwFolderNavService = pwFolderNavService;
        this.pageTitle = 'Folder tree';
        this.showLoadingLayer = false;
        this.recursiveDocMax = 1000;
        this.recursiveDocs = 0;
        console.log("In navnode-list.component.ts");
    }
    NavNodeListComponent.prototype.navNodeShowDocuments = function (event, navNode) {
        console.log("show docs" + navNode.properties["Description"]);
        this.navNodeShowDocumentsOfCurrentNavNode(navNode, false);
    };
    NavNodeListComponent.prototype.navNodeShowDocumentsAdd = function (event, navNode) {
        console.log("show docs" + navNode.properties["Description"]);
        this.navNodeShowDocumentsOfCurrentNavNode(navNode, true);
    };
    NavNodeListComponent.prototype.navNodeShowDocumentsOfCurrentNavNode = function (navNode, add) {
        this.pwFolderNavService.setNavNodeNavigation(new pwFolderNav_service_1.NavNodeNavigation(navNode, add));
    };
    NavNodeListComponent.prototype.resetRecursiveDocCounter = function () {
        this.recursiveDocs = 0;
    };
    NavNodeListComponent.prototype.navNodeShowDocumentsRecursive = function (event, navNode, numberOfDocs) {
        var _this = this;
        console.log("show docs recursive" + navNode.properties["Description"] + " number of docs: " + numberOfDocs);
        // this.recursiveDocs+= numberOfDocs;
        this.pwFolderNavService.setNavNodeNavigation(new pwFolderNav_service_1.NavNodeNavigation(navNode, true));
        // Get navnode children of this component
        var searcher = this._dataService.getNavNodes(globals_1.Globals.getInstance().getRepository(), navNode, true);
        searcher.subscribe(function (navnodes) {
            console.log("maybe  call checkChildren" + _this.recursiveDocs + " of max " + _this.recursiveDocMax);
            if (_this.recursiveDocs < _this.recursiveDocMax) {
                console.log("gonna call checkChildren" + _this.recursiveDocs + " of max " + _this.recursiveDocMax);
                _this.recursiveDocs += _this.checkChildren(navnodes, _this.recursiveDocs);
            }
            else {
                console.log("Got too much recusirve: " + _this.recursiveDocs + " of max " + _this.recursiveDocMax);
            }
            console.log("after checkchildren: " + _this.recursiveDocs);
        }, function (error) {
            _this.errorMessage = error;
            _this.toggleLoadingLayer(false);
        }, function () { _this.toggleLoadingLayer(false); });
    };
    NavNodeListComponent.prototype.checkChildren = function (children, numberOfDocs) {
        console.log("In checkchildren. numberof docs: " + numberOfDocs);
        var grandChildren;
        numberOfDocs = 0;
        for (var child = 0; child < children.length && this.recursiveDocs < this.recursiveDocMax; child++) {
            console.log("in checkChildren. Child: " + children[child].properties["Description"]);
            // this.pwFolderNavService.setNavNodeNavigation(new NavNodeNavigation(children[child],true));
            if (children[child].properties["Key_ClassName"] == "Project") {
                this.navNodeShowDocumentsRecursive(null, children[child], numberOfDocs);
            }
            else {
                numberOfDocs++;
                console.log("adding to numberOfDocs: " + numberOfDocs);
            }
        }
        return numberOfDocs;
    };
    // navNodeNavigateFolders(event: any, navNode: INavNode) {
    //     this.currentNavNode = navNode;
    //     this.loadNavNodes(this.currentNavNode, false);
    // }
    NavNodeListComponent.prototype.ngOnInit = function () {
        this.loadNavNodes(this.currentNavNode, false);
    };
    NavNodeListComponent.prototype.ngOnChanges = function () {
    };
    NavNodeListComponent.prototype.loadNavNodes = function (parent, loadDocuments) {
        var _this = this;
        console.log("start search");
        this.toggleLoadingLayer(true);
        var searcher = this._dataService.getNavNodes(globals_1.Globals.getInstance().getRepository(), parent, loadDocuments);
        searcher.subscribe(function (navnodes) {
            _this.navNodes = navnodes;
        }, function (error) {
            _this.errorMessage = error;
            _this.toggleLoadingLayer(false);
        }, function () { _this.toggleLoadingLayer(false); });
    };
    NavNodeListComponent.prototype.showProperties = function (event, navNode) {
        console.log("in navnode-list - call props for: " + navNode.properties["Key_InstanceId"]);
    };
    NavNodeListComponent.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    return NavNodeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavNodeListComponent.prototype, "currentNavNode", void 0);
NavNodeListComponent = __decorate([
    core_1.Component({
        selector: 'pm-navnodes',
        moduleId: module.id,
        inputs: ['someNavNode'],
        templateUrl: 'navnode-list.component.html?v=' + globals_1.Globals.getInstance().version,
        styleUrls: ['navnode-list.component.css']
    }),
    __metadata("design:paramtypes", [navnode_service_1.NavNodeService, pwFolderNav_service_1.PWFolderNavService])
], NavNodeListComponent);
exports.NavNodeListComponent = NavNodeListComponent;
//# sourceMappingURL=navnode-list.component.js.map