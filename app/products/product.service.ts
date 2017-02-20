
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';
import { Product } from './product';

@Injectable()
export class ProductService {

    private _productUrl = "https://devportal.metroselskabet.dk/lef/_api/web/lists/GetByTitle('Products')/items?$format=json";
       // 'www.myWebService.com/api/products'; 
       // 'api/products/products.json'
    
    constructor (private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        console.log("In getProducts");

        var headers = new Headers();
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
                return this._http.get(this._productUrl, { headers: headers}).map(
                                (response: Response) => { return this.mapProducts(response) }
                )
  
         
    }

    mapProducts(response: Response): IProduct[] {
        console.log("in mapparodtc");
         // return response.json().d.results.map(toProduct)
         return response.json().d.results.map(this.toProduct)
    }

    toProduct(element:any): IProduct{
        let product = <Product>({
            productId: element.Id,
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
    }

    private handleError(error: Response) {
        console.log("Error: " + error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
