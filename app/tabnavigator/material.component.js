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
var router_1 = require("@angular/router");
var MaterialComponent = (function () {
    function MaterialComponent(router) {
        this.router = router;
        this.pageTitle = 'Material Test';
    }
    MaterialComponent.prototype.ngOnInit = function () {
    };
    MaterialComponent.prototype.selectTab = function (index) {
        switch (index) {
            case 0: {
                console.log("launch foldhomers");
                this.router.navigate(['/']);
                break;
            }
            case 1: {
                console.log("launch folders");
                this.router.navigate(['/pwFolderNav']);
                break;
            }
            case 2: {
                console.log("launch search");
                this.router.navigate(['/pwSearchAll']);
                break;
            }
        }
    };
    return MaterialComponent;
}());
MaterialComponent = __decorate([
    core_1.Component({
        selector: 'pm-material',
        moduleId: module.id,
        templateUrl: 'material.component.html',
        styleUrls: ['material.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MaterialComponent);
exports.MaterialComponent = MaterialComponent;
//# sourceMappingURL=material.component.js.map