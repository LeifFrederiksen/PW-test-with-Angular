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
var navnode_service_1 = require("./navnode.service");
var globals_1 = require("../shared/globals");
var NavNodeListComponent = (function () {
    function NavNodeListComponent(_dataService) {
        this._dataService = _dataService;
        this.pageTitle = 'Folder tree';
        this.showLoadingLayer = false;
        this.navNodeShowDocumentsSelector = new core_1.EventEmitter();
    }
    NavNodeListComponent.prototype.navNodeShowDocuments = function (event, navNode) {
        console.log("show docs");
        this.navNodeShowDocumentsSelector.emit(navNode);
    };
    NavNodeListComponent.prototype.navNodeNavigateFolders = function (event, navNode) {
        this.currentNavNode = navNode;
        this.loadNavNodes(this.currentNavNode, false);
    };
    NavNodeListComponent.prototype.ngOnInit = function () {
        this.loadRootNavNodes();
    };
    NavNodeListComponent.prototype.ngOnChanges = function () {
    };
    NavNodeListComponent.prototype.loadRootNavNodes = function () {
        console.log("gonna call service with this repo: " + globals_1.Globals.getInstance().getRepository().instanceId);
        this.loadNavNodes(null, false);
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
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NavNodeListComponent.prototype, "navNodeShowDocumentsSelector", void 0);
NavNodeListComponent = __decorate([
    core_1.Component({
        selector: 'pm-navnodes',
        moduleId: module.id,
        templateUrl: 'navnode-list.component.html',
        styleUrls: ['navnode-list.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof navnode_service_1.NavNodeService !== "undefined" && navnode_service_1.NavNodeService) === "function" && _a || Object])
], NavNodeListComponent);
exports.NavNodeListComponent = NavNodeListComponent;
var _a;
//# sourceMappingURL=navnode-list.component.js.map