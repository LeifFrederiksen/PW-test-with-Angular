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
var repository_service_1 = require("./repository.service");
var globals_1 = require("../../shared/globals");
var RepositoryListComponent = (function () {
    function RepositoryListComponent(_dataService) {
        this._dataService = _dataService;
        this.pageTitle = 'Select data source';
        this.showLoadingLayer = false;
        this.repositorySelector = new core_1.EventEmitter();
    }
    RepositoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("on init");
        this.toggleLoadingLayer(true);
        this._dataService.getRepositories().subscribe(function (repositories) {
            _this.toggleLoadingLayer(false);
            _this.repositories = repositories;
        }, function (error) {
            _this.toggleLoadingLayer(false);
            _this.errorMessage = error;
        });
    };
    RepositoryListComponent.prototype.repositorySelectorClicked = function (event, repository) {
        this.repositorySelector.emit(repository);
        globals_1.Globals.getInstance().setRepository(repository);
    };
    RepositoryListComponent.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    return RepositoryListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RepositoryListComponent.prototype, "repositorySelector", void 0);
RepositoryListComponent = __decorate([
    core_1.Component({
        selector: 'pm-repositories',
        moduleId: module.id,
        templateUrl: 'repository-list.component.html?v=' + globals_1.Globals.getInstance().version
    }),
    __metadata("design:paramtypes", [repository_service_1.RepositoryService])
], RepositoryListComponent);
exports.RepositoryListComponent = RepositoryListComponent;
//# sourceMappingURL=repository-list.component.js.map