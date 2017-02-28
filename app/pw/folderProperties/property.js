"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["String"] = 0] = "String";
    PropertyType[PropertyType["Date"] = 1] = "Date";
    PropertyType[PropertyType["DateTime"] = 2] = "DateTime";
    PropertyType[PropertyType["Boolean"] = 3] = "Boolean";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
;
var IPropertyPair = (function () {
    function IPropertyPair() {
    }
    return IPropertyPair;
}());
exports.IPropertyPair = IPropertyPair;
var PropertyPair = (function () {
    function PropertyPair(name, value, type) {
        this.name = name;
        this.value = value;
        this.type = type;
    }
    return PropertyPair;
}());
exports.PropertyPair = PropertyPair;
var Property = (function () {
    function Property(instanceId, description, standardProps) {
        this.instanceId = instanceId;
        this.description = description;
        this.standardProps = standardProps;
        this.standardPropsArray = new Array();
        this.customPropsArray = new Array();
    }
    Property.prototype.setCustomProps = function (props) {
        this.customProps = props;
    };
    Property.prototype.getCustomProps = function () {
        return this.customProps;
    };
    Property.prototype.addStandardProp = function (name, value, type) {
        this.standardPropsArray.push(new PropertyPair(name, value, type));
    };
    Property.prototype.getStandardPropArray = function () {
        return this.standardPropsArray;
    };
    Property.prototype.addCustomProp = function (name, value, type) {
        this.customPropsArray.push(new PropertyPair(name, value, type));
    };
    Property.prototype.getCustomPropArray = function () {
        return this.customPropsArray;
    };
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=property.js.map