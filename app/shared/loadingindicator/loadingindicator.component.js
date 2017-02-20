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
var LoadingIndicator = (function () {
    function LoadingIndicator() {
    }
    return LoadingIndicator;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoadingIndicator.prototype, "showLoadingIndicator", void 0);
LoadingIndicator = __decorate([
    core_1.Component({
        selector: 'ai-loadingindicator',
        moduleId: module.id,
        templateUrl: 'loadingindicator.component.html?v=' + globals_1.Globals.getInstance().version,
        styleUrls: ['loadingindicator.component.css?v=' + globals_1.Globals.getInstance().version]
    })
], LoadingIndicator);
exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=loadingindicator.component.js.map