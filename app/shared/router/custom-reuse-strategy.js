"use strict";
var CustomReuseStrategy = (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
        this.acceptedRoutes = ["pwFolderNav", "pwSearchAll"];
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        // console.debug('CustomReuseStrategy:shouldDetach', route);
        //   return true;
        if (this.acceptedRoutes.indexOf(route.routeConfig.path) > -1) {
            console.log("detaching", route);
            return true;
        }
        else {
            console.log("NOT detaching", route);
            return false; // will be "view/:resultId" when user navigates to result
        }
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        // console.debug('CustomReuseStrategy:store', route, handle);
        this.handlers[route.routeConfig.path] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        // console.debug('CustomReuseStrategy:shouldAttach', route);
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        // console.debug('CustomReuseStrategy:retrieve', route);
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        // console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
        false;
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());
exports.CustomReuseStrategy = CustomReuseStrategy;
//# sourceMappingURL=custom-reuse-strategy.js.map