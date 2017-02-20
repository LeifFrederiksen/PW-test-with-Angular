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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    // 'www.myWebService.com/api/products'; 
    // 'api/products/products.json'
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = "https://devportal.metroselskabet.dk/lef/_api/web/lists/GetByTitle('Products')/items?$format=json";
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        console.log("In getProducts");
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json;odata=verbose');
        //debugger;
        /*
        return this._http.get(this._productUrl, { headers: headers})
                    .map((response: Response) => {
                        console.log("response.json: " + response.json().d.results);
                        debugger;
                        <IProduct[]>response.json().d.results
                    
                    })
                    .do(data => {
                           console.log('All: ' + data)
                    })
                    .catch(this.handleError);
      */
        /*
                var response: Observable<Response> = this._http.get(this._productUrl, { headers: headers});
                var products: Observable<IProduct[]> =
                        response.map(
                                        (response: Response) => { return this.mapProducts(response) }
                        )
                return products;
        */
        return this._http.get(this._productUrl, { headers: headers }).map(function (response) { return _this.mapProducts(response); });
    };
    ProductService.prototype.mapProducts = function (response) {
        console.log("in mapparodtc");
        // return response.json().d.results.map(toProduct)
        return response.json().d.results.map(this.toProduct);
    };
    ProductService.prototype.toProduct = function (element) {
        var product = ({
            productId: 2,
            productName: element.Title,
            productCode: element.Code,
            releaseDate: "date",
            description: "desc",
            price: 70,
            starRating: 3,
            imageUrl: "url"
        });
        console.log('Parsed product:', product);
        return product;
    };
    ProductService.prototype.handleError = function (error) {
        console.log("Error: " + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map