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
var http_1 = require("@angular/http");
var property_1 = require("./property");
var globals_1 = require("../shared/globals");
var FolderPropertiesService = (function () {
    function FolderPropertiesService(_http) {
        this._http = _http;
        this._baseUrl = globals_1.Globals.getInstance().getBaseUrl();
        this._schema = "PW_WSG";
    }
    FolderPropertiesService.prototype.getFolderProperties = function (repository, navNodeId) {
        var _this = this;
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Project?";
        dataUrl += "$select=*,ProjectProjectType!poly-forward-ProjectType!poly.*";
        dataUrl += "&$filter=$id+in+['" + navNodeId + "']";
        return this._http.get(dataUrl).map(function (response) { return _this.mapProperties(response); });
    };
    FolderPropertiesService.prototype.mapProperties = function (response) {
        return this.toProperty(response.json().instances[0]);
    };
    FolderPropertiesService.prototype.toProperty = function (element) {
        var property = new property_1.Property(element.instanceId, element.properties.Description, element.properties, element.relationshipInstances[0].relatedInstance.properties);
        property.addStandardProp("Created Time", property.standardProps.CreateTime, property_1.PropertyType.DateTime);
        property.addStandardProp("Update Time", property.standardProps.UpdateTime, property_1.PropertyType.DateTime);
        property.addStandardProp("Description", property.standardProps.Description, property_1.PropertyType.String);
        property.addStandardProp("Name", property.standardProps.Name, property_1.PropertyType.String);
        property.addStandardProp("Label", property.standardProps.Label, property_1.PropertyType.String);
        property.addStandardProp("Project?", property.standardProps.IsRichProject, property_1.PropertyType.Boolean);
        for (var name_1 in property.customProps) {
            if (property.customProps.hasOwnProperty(name_1)) {
                property.addCustomProp(name_1, property.customProps[name_1], property_1.PropertyType.String);
            }
        }
        return property;
    };
    return FolderPropertiesService;
}());
FolderPropertiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FolderPropertiesService);
exports.FolderPropertiesService = FolderPropertiesService;
//# sourceMappingURL=folderProperties.service.js.map