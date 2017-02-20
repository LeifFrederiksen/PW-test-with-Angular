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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var folderProperties_service_1 = require("./folderProperties.service");
var globals_1 = require("../../shared/globals");
var FolderPropertiesComponent = (function () {
    function FolderPropertiesComponent(_route, _router, _dataService, _location) {
        this._route = _route;
        this._router = _router;
        this._dataService = _dataService;
        this._location = _location;
        this.pageTitle = 'Properties';
        console.log("activeted via routex:  " + _route);
        this.navNodeId = _route.params["value"]["id"];
    }
    FolderPropertiesComponent.prototype.ngOnInit = function () {
        this.loadProperties(this.navNodeId);
    };
    FolderPropertiesComponent.prototype.loadProperties = function (navNodeId) {
        var _this = this;
        console.log("start prop loading");
        // this.toggleLoadingLayer(true);
        var searcher = this._dataService.getFolderProperties(globals_1.Globals.getInstance().getRepository(), this.navNodeId);
        searcher.subscribe(function (properties) {
            _this.properties = properties;
        }, function (error) { return _this.errorMessage = error; }, function () {
            // this.toggleLoadingLayer(false);
        });
    };
    FolderPropertiesComponent.prototype.onBack = function () {
        // this._router.navigate(['/pwFolderNav']);
        this._location.back();
    };
    return FolderPropertiesComponent;
}());
FolderPropertiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selector',
        templateUrl: 'folderProperties.component.html?v=' + globals_1.Globals.getInstance().version
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, folderProperties_service_1.FolderPropertiesService, common_1.Location])
], FolderPropertiesComponent);
exports.FolderPropertiesComponent = FolderPropertiesComponent;
//# sourceMappingURL=folderProperties.component.js.map