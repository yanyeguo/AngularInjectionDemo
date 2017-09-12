import { LoggerService } from './../logger/logger.service';

import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('logger服务被调用');
    return new Product(1, 'iphone8', 6777, '最新款手机');
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) { }
}
