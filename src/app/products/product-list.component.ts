import { Component, OnInit } from "@angular/core";
import { ProductService } from './product.service';
import { IProduct } from './product';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
  showImage: boolean = false;
  pageTitle: string ='Product List';
  abc: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  userName: string = "";
  products: IProduct[] = [];
  errorMessage: string;
  filteredProducts: IProduct[] = [];

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  constructor(private productservice: ProductService){}
  ngOnInit(): void{
    this.productservice.getProducts().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = data;
      }, error => {
        this.errorMessage = error;
      }
    )
  }

  userLogin(): void{
    this.userName = this.userName + " not success";
  }
  onNotify(msg: string): void{
    alert(msg);
  }
}