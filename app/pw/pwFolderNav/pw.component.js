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
var PWComponent = (function () {
    function PWComponent() {
        this.pageTitle = 'PW searcher';
        this.currentRepositoryEmitter = new core_1.EventEmitter();
        this.currentNavNodeEmitter = new core_1.EventEmitter();
    }
    PWComponent.prototype.setRepository = function (repository) {
        console.log("Repository is: " + repository.instanceId);
        this.currentRepository = repository;
        this.currentRepositoryEmitter.emit(this.currentRepository);
    };
    PWComponent.prototype.setNavNodeShowDocuments = function (navNode) {
        console.log("PW  setNavNode");
        this.currentNavNode = navNode;
        this.currentNavNodeEmitter.emit(this.currentNavNode);
    };
    return PWComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PWComponent.prototype, "currentRepositoryEmitter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PWComponent.prototype, "currentNavNodeEmitter", void 0);
PWComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'pw.component.html'
    })
], PWComponent);
exports.PWComponent = PWComponent;
//# sourceMappingURL=pw.component.js.map