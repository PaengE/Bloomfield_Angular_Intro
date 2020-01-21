import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFirstComponent } from './product-first/product-first.component';



@NgModule({
  declarations: [ProductFirstComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductFirstComponent
  ]
})
export class RelatedProductsModule { }
