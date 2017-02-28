"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var NavNodeNavigation = (function () {
    function NavNodeNavigation(navNode, add) {
        this.navNode = navNode;
        this.add = add;
    }
    NavNodeNavigation.prototype.getNavNode = function () {
        return this.navNode;
    };
    NavNodeNavigation.prototype.doAdd = function () {
        return this.add;
    };
    return NavNodeNavigation;
}());
exports.NavNodeNavigation = NavNodeNavigation;
var PWFolderNavService = (function () {
    function PWFolderNavService() {
        this.navNodeNavigationSource = new Subject_1.Subject();
        this.navNode$ = this.navNodeNavigationSource.asObservable();
    }
    PWFolderNavService.prototype.setNavNodeNavigation = function (navNodeNavigation) {
        console.log("in setNavNodeNavigation: " + navNodeNavigation.getNavNode().properties["Description"]);
        this.navNodeNavigationSource.next(navNodeNavigation);
    };
    return PWFolderNavService;
}());
PWFolderNavService = __decorate([
    core_1.Injectable()
], PWFolderNavService);
exports.PWFolderNavService = PWFolderNavService;
//# sourceMappingURL=pwFolderNav.service.js.map