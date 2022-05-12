import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product/IProduct';
import {ProductDao} from '../modelDao/productDao';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product:IProduct[]=ProductDao.products;
  title='product';
  getProduct(item :IProduct){
    // @ts-ignore
    this.product=item;
  }

  ngOnInit(): void {

  }

}
