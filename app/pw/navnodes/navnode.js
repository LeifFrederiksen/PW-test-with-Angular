"use strict";
var NavNode = (function () {
    function NavNode(instanceId, properties) {
        this.instanceId = instanceId;
        this.properties = properties;
    }
    NavNode.prototype.toggle = function () {
        if (this.isExpanded()) {
            this.collapse();
        }
        else if (this.canExpand()) {
            this.expand();
        }
    };
    NavNode.prototype.expand = function () {
        this._isExpanded = true;
    };
    NavNode.prototype.collapse = function () {
        this._isExpanded = false;
    };
    NavNode.prototype.isExpanded = function () {
        return this._isExpanded;
    };
    NavNode.prototype.canExpand = function () {
        return true;
    };
    return NavNode;
}());
exports.NavNode = NavNode;
//# sourceMappingURL=navnode.js.map