import { AnotherProductService } from './../shared/another-product/another-product.service';
import { Product, ProductService } from './../shared/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers: [{
  //   provide: ProductService, useClass: AnotherProductService
  // }]

})
export class Product2Component implements OnInit {

  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
