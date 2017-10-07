import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {
        this.listFilter;
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    get listFilter(): string {
        console.log('getting list filter');
        return this._listFilter;
    }
    set listFilter(value: string) {
        console.log('setting list filter');
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        console.log('filtered List: ', this.filteredProducts);
    }
    filteredProducts: IProduct[];
    products: IProduct[];
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => {
            console.log(product);
            return product.productName.toLocaleLowerCase().indexOf(filterBy) > -1;
        })
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    onNotify(message: string): void {
        this.pageTitle = message;
    }
    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;

    }
}
