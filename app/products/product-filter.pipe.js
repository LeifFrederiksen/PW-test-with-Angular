"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductNameFilterPipe = (function () {
    function ProductNameFilterPipe() {
    }
    ProductNameFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    return ProductNameFilterPipe;
}());
ProductNameFilterPipe = __decorate([
    core_1.Pipe({ name: 'productNameFilter' })
], ProductNameFilterPipe);
exports.ProductNameFilterPipe = ProductNameFilterPipe;
var ProductStringFieldFilterPipe = (function () {
    function ProductStringFieldFilterPipe() {
    }
    ProductStringFieldFilterPipe.prototype.transform = function (value, filterField, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product[filterField].toLocaleLowerCase().indexOf(filterBy) !== -1;
        })
            : value;
    };
    return ProductStringFieldFilterPipe;
}());
ProductStringFieldFilterPipe = __decorate([
    core_1.Pipe({ name: 'productStringFieldFilter' })
], ProductStringFieldFilterPipe);
exports.ProductStringFieldFilterPipe = ProductStringFieldFilterPipe;
var ProductPriceFilterPipe = (function () {
    function ProductPriceFilterPipe() {
    }
    ProductPriceFilterPipe.prototype.transform = function (value, priceFrom, priceTo) {
        if (!priceFrom && !priceTo) {
            return value;
        }
        return value.filter(function (element) {
            return priceIsBetween(element.price, priceFrom, priceTo);
        });
    };
    return ProductPriceFilterPipe;
}());
ProductPriceFilterPipe = __decorate([
    core_1.Pipe({ name: 'productPriceFilter' })
], ProductPriceFilterPipe);
exports.ProductPriceFilterPipe = ProductPriceFilterPipe;
function priceIsBetween(price, priceFrom, priceTo) {
    var largeEnough = priceFrom ? price >= priceFrom : true;
    var smallEnough = priceTo ? price <= priceTo : true;
    return largeEnough && smallEnough;
}
//# sourceMappingURL=product-filter.pipe.js.map