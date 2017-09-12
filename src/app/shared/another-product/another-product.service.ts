import { LoggerService } from './../logger/logger.service';
import { Product, ProductService } from './../product/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('logger服务被调用');
    return new Product(2, 'iphone9', 11111, '最新款手机');
  }

}
