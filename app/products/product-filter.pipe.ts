import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({ name: 'productNameFilter'})
export class ProductNameFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter(( product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}

@Pipe({ name: 'productStringFieldFilter'})
export class ProductStringFieldFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterField: string, filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter(
                    function(product) {
                            return product[filterField].toLocaleLowerCase().indexOf(filterBy) !== -1
                    }) 
                : value;
  }
}

@Pipe({ name: 'productPriceFilter'})
export class ProductPriceFilterPipe implements PipeTransform {
    transform(value: IProduct[], priceFrom: number, priceTo: number): IProduct[] {
        
        if (!priceFrom && !priceTo) {
            return value;
        }

        return value.filter(function(element) {
            return priceIsBetween(element.price,priceFrom,priceTo);
        });
    }
}

function priceIsBetween(price: number, priceFrom: number, priceTo: number) {
    let largeEnough: boolean = priceFrom ? price >= priceFrom : true;
    let smallEnough: boolean = priceTo ? price <= priceTo : true;
    return largeEnough && smallEnough;
}