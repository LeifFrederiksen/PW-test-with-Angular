import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products';
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = false;
    productNameFilterBy: string;
    productCodeFilterBy: string;
    priceFromFilterBy: number;
    priceToFilterBy: number;
    products: IProduct[];
    errorMessage: any;
    
    constructor(private _productService: ProductService) {   }

    ngOnInit(): void {
        console.log("on init");
        // this.products = this._productService.getProducts();
        this._productService.getProducts().subscribe(
                                    products => this.products = products,
                                    error => this.errorMessage = <any>error);
        
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        console.log("got the click: " + message);
        this.pageTitle = 'Product list: ' + message;
    }
}


