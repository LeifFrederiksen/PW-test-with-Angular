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
var Subject_1 = require("rxjs/Subject");
var navnode_service_1 = require("../../navnodes/navnode.service");
var globals_1 = require("../../../shared/globals");
var Store = (function () {
    // constructor(private _http:Http){
    function Store(navNodeService) {
        var _this = this;
        this.navNodeService = navNodeService;
        this.dispatcher = new Subject_1.Subject();
        this.navNodes = {};
        this.showLoadingLayer = false;
        this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
    }
    Store.prototype.handleAction = function (action) {
        var _this = this;
        if (action.name === 'LOAD_NODES') {
            if (this.navNodes[action.key]) {
                this.navNodes[action.key].next(this.navNodes[action.key]);
            }
            else {
                var navNode = action.node;
                var searcher = this.navNodeService.getNavNodes(globals_1.Globals.getInstance().getRepository(), navNode, false);
                searcher.subscribe(function (navnodes) {
                    _this.navNodes = navnodes;
                    debugger;
                }, function (error) {
                    _this.errorMessage = error;
                    _this.toggleLoadingLayer(false);
                }, function () { _this.toggleLoadingLayer(false); });
            }
        }
    };
    Store.prototype.getTreeNodes = function (key) {
        debugger;
        if (!this.navNodes.hasOwnProperty(key)) {
            this.navNodes[key] = new Subject_1.Subject();
        }
        return this.navNodes[key].asObservable();
    };
    Store.prototype.dispatchAction = function (action) {
        this.dispatcher.next(action);
    };
    Store.prototype.toggleLoadingLayer = function (show) {
        this.showLoadingLayer = show;
    };
    return Store;
}());
Store = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [navnode_service_1.NavNodeService])
], Store);
exports.Store = Store;
//# sourceMappingURL=store.js.map