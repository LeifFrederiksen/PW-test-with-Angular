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
var forms_1 = require("@angular/forms");
var globals_1 = require("../../shared/globals");
var PWSearchAllComponent = (function () {
    function PWSearchAllComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.pageTitle = 'Search';
        this.searchForm = this.formBuilder.group({
            formDocumentDescriptionSearchValue: [""]
        });
    }
    PWSearchAllComponent.prototype.getCurrentRepository = function () {
        return globals_1.Globals.getInstance().getRepository();
    };
    PWSearchAllComponent.prototype.doSearch = function (event) {
        this.documentDescriptionSearchValue = this.searchForm.controls.formDocumentDescriptionSearchValue.value;
    };
    return PWSearchAllComponent;
}());
PWSearchAllComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'pwSearchAll.component.html?v=' + globals_1.Globals.getInstance().version
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], PWSearchAllComponent);
exports.PWSearchAllComponent = PWSearchAllComponent;
//# sourceMappingURL=PWSearchAll.component.js.map