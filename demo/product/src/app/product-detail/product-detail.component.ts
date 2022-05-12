import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product/IProduct';
import {ProductDao} from '../modelDao/productDao';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   products:IProduct| undefined
  constructor(private _activatedRoute :ActivatedRoute) {

  }

  ngOnInit(): void {
     let productIndex=this._activatedRoute.snapshot.params['index'];
     console.log("detaillll", productIndex);
  }

}
