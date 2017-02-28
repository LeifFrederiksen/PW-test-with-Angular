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
var TabNavigator = (function () {
    function TabNavigator(router) {
        this.router = router;
        this.pageTitle = 'Material Test';
    }
    TabNavigator.prototype.ngOnInit = function () {
    };
    TabNavigator.prototype.selectTab = function (index) {
        switch (index) {
            case 0: {
                console.log("launch home");
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
    return TabNavigator;
}());
TabNavigator = __decorate([
    core_1.Component({
        selector: 'pm-tabnavigator',
        moduleId: module.id,
        templateUrl: 'tabnavigator.component.html',
        styleUrls: ['tabnavigator.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], TabNavigator);
exports.TabNavigator = TabNavigator;
//# sourceMappingURL=tabnavigator.component.js.map