import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;

  private imgUrl = "http://placehold.it/320×150";
  constructor(private productService: ProductService) {
   
  }

  ngOnInit() {
      this.products=this.productService.getProducts();
  }

}

