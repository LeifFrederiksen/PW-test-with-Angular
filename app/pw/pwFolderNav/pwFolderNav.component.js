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
var globals_1 = require("../../shared/globals");
var pwFolderNav_service_1 = require("./pwFolderNav.service");
var PWFolderNavComponent = (function () {
    function PWFolderNavComponent() {
        this.pageTitle = 'PW Folder Navigation';
    }
    PWFolderNavComponent.prototype.getCurrentRepository = function () {
        return globals_1.Globals.getInstance().getRepository();
    };
    Object.defineProperty(PWFolderNavComponent.prototype, "currentNavNode", {
        // currentNavNode: INavNode;
        // @Output() currentNavNodeEmitter: EventEmitter<INavNode> = new EventEmitter<INavNode>();
        // @Output() selectedNavNode: INavNode;
        set: function (navNode) {
            console.log("mother In selectedNavNode: " + navNode);
        },
        enumerable: true,
        configurable: true
    });
    PWFolderNavComponent.prototype.setNavNodeShowDocuments = function (navNode) {
        console.log("PW  setNavNode");
        // this.currentNavNode = navNode;
        // this.currentNavNodeEmitter.emit(this.currentNavNode);
    };
    return PWFolderNavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PWFolderNavComponent.prototype, "currentNavNode", null);
PWFolderNavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        providers: [pwFolderNav_service_1.PWFolderNavService],
        templateUrl: 'pwFolderNav.component.html?v=' + globals_1.Globals.getInstance().version
    }),
    __metadata("design:paramtypes", [])
], PWFolderNavComponent);
exports.PWFolderNavComponent = PWFolderNavComponent;
//# sourceMappingURL=PWFolderNav.component.js.map