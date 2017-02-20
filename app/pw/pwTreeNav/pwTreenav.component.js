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
var store_1 = require("./redux/store");
var tree_node_service_1 = require("./tree-node-service");
var globals_1 = require("../../shared/globals");
var PWTreeNavComponent = (function () {
    function PWTreeNavComponent(_store, _treeNodeService) {
        this._store = _store;
        this._treeNodeService = _treeNodeService;
    }
    PWTreeNavComponent.prototype.ngOnInit = function () {
        if (!this.root) {
            // this.root = new TreeNode('root','/app/pw/pwTreeNav/tree-view-data/countries.json', '');
            this.root = null;
        }
        // this.subscription = this._store.getTreeNodes(this.root).subscribe(res => {
        //                                             this.items = res;
        //                                             debugger;
        //                                             });
        // this._treeNodeService.loadTreeNodes(this.root);
    };
    PWTreeNavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PWTreeNavComponent.prototype.getCurrentRepository = function () {
        return globals_1.Globals.getInstance().getRepository();
    };
    return PWTreeNavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PWTreeNavComponent.prototype, "root", void 0);
PWTreeNavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'pwTreeNav.component.html',
        selector: 'tree-view'
    }),
    __metadata("design:paramtypes", [store_1.Store, tree_node_service_1.TreeNodeService])
], PWTreeNavComponent);
exports.PWTreeNavComponent = PWTreeNavComponent;
//# sourceMappingURL=pwTreeNav.component.js.map