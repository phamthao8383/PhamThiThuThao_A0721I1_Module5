import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductDao} from '../modelDao/productDao';
import {IProduct} from '../product/IProduct';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product:IProduct={ id:0,name:"",price:0,description:""};
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(productForm: NgForm) {
    if(productForm.valid) {
      console.log(this.product);
    }

  }
}
