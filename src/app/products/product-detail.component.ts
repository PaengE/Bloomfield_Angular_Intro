import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail: ";
  product: IProduct;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    if(id) {
      this.getProduct(id);
    }
  }
  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
      resultProduct => this.product = resultProduct,
      error => this.errorMessage = error
    )
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
