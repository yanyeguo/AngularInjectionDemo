import { AnotherProductService } from './shared/another-product/another-product.service';
import { LoggerService } from './shared/logger/logger.service';
import { ProductService } from './shared/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggerService, {
    provide: ProductService,
    // useFactory: () => {
    //   const logger = new LoggerService();
    useFactory: (logger: LoggerService, isDev) => {
      // const dev = Math.random() > 0.5;
      if (isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV']
  },
    {
      provide: 'IS_DEV_ENV', useValue: true
      // provide: 'APP_CONFIG', useValue: { isDev: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
